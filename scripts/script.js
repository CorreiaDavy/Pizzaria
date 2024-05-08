




//remover produto do carrinho, quando clicar no botão de remover
function removerProdCar(){

    const adici_car_bota = document.getElementsByClassName("remove_prod");
    for(var i=0; i<adici_car_bota.length;i++){
        adici_car_bota[i].addEventListener("click", function (event){
            event.target.parentElement.parentElement.remove()
    
            // Verifique se o carrinho está vazio
            if (document.getElementsByClassName("produtos_carAdd").length != 0) {
                // Se o carrinho estiver vazio, chame somaTotalcarrinho() para recalcular o total
                somaTotalcarrinho();
                
                
            }
    
            if (document.getElementsByClassName("produtos_carAdd").length === 0) {
                // Se o carrinho estiver vazio, chame somaTotalcarrinho() para recalcular o total
                somaTotalcarrinho();
            }
        })
    }
    
    }
    
    //atualizar carrinho de acordo com os produtos nele, e apresenta a soma do total no carrinho
    function somaTotalcarrinho(){
    
    let somacarrinho = 0
    const calValorProdCar = document.getElementsByClassName("produtos_carAdd");
    for(var i=0; i<calValorProdCar.length;i++){
        const produtoind_car = calValorProdCar[i]
        const precoProd = produtoind_car.querySelector(".produtos_carAdd strong").innerText.replace("R$", "")
        const valorImput = produtoind_car.getElementsByClassName("valor_input_prod")[0].value
    
     somacarrinho += precoProd * valorImput
    
     
        
    }
    const totalFormatado = "R$ " + somacarrinho.toFixed(2);  
    
    const adicio_valortotalCar = document.querySelector(".divTotalCar #total_carrinho").innerText =totalFormatado
    
    
    
    }
    
    // Chame a função removerProdCar() para adicionar o evento de clique nos botões de remoção
    removerProdCar();
    
    
    //Atualizar carrinho na mudança de input e também remover produto quando o input, for igual a zero
    function atualizarCarRemoveInputzero (){
    const atualizarvalorInput = document.getElementsByClassName("valor_input_prod");
    for(var i=0; i<atualizarvalorInput.length;i++){
     atualizarvalorInput[i].addEventListener("change", function(event){
    const valorMudanInput = event.target.value
    const removerProdinpuzero = event.target.parentElement.parentElement;
    
    if(valorMudanInput != 0 ){
        somaTotalcarrinho()
    }
    else if(valorMudanInput === "0")
        event.target.parentElement.parentElement.remove()
        somaTotalcarrinho()
    
    
    
    
     })
    }
    
    }
    
    atualizarCarRemoveInputzero()
    
    
    //analisar os produtos para adicionar ao carrinho
    function carAdicioanr(){
        const adicioanrProd = document.getElementsByClassName("butao_adicio_car");
        for(var i = 0; i < adicioanrProd.length; i++){
            adicioanrProd[i].addEventListener("click", adiProdCarCompra)
        }
    }
    
    carAdicioanr()

        function analisarInputProcar(){
            
        }
        
        // adicionar produtos ao carrinho de acordo como nome do produto, valor e imagem
        function adiProdCarCompra (event){
            const botao = event.target;
            const produtoInfor = botao.parentElement
    
            const nomeProduto = produtoInfor.querySelector("p").innerText;
            const valorProd = produtoInfor.querySelector("strong").innerText;
            const imagProd = produtoInfor.querySelector("img").src;

            

                //atualização do input se clicar em adicionar o mesmo produto no carrinho
                const aumenInput = document.getElementsByClassName("ProdutoNomeCard");
                for(var i=0; i<aumenInput.length;i++){

                    if(aumenInput[i].innerText===nomeProduto){
                        aumenInput[i].parentElement.parentElement.getElementsByClassName("valor_input_prod")[0].value++

                        somaTotalcarrinho()
                        return
                    }
                    
                }
            

           


    
         let crianovoProd = document.createElement("tr");
            crianovoProd.classList.add("produtos_carAdd");
    
            crianovoProd.innerHTML=
            `<td class="img_pro_car">
            <img src="${imagProd}">
        </td>
        <td><p class="nomeProduto">${nomeProduto}</p></td>
        <td><strong>${valorProd}</strong></td>
        <td><input type="number" min="0"   value="1" class="valor_input_prod"></td>
        <td>
            <button type="button" class="remove_prod">Remover</button>
        </td>
            `
           
             
    
            const tabelatbody = document.querySelector(".dentro_tabel");
            tabelatbody.append(crianovoProd);
            

   
           
            
            removerProdCar()
            atualizarCarRemoveInputzero()
            somaTotalcarrinho() 
            adiProdCarCompra()    
            } 

            
        
           
            
           
                     
    
         
        
    