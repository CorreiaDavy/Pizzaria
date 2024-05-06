




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


//adicionar produtos no carrinho
function adicionarAocarrin(){
const adicioanrProd = document.getElementsByClassName("butao_adicio_car");
for(var i=0; i<adicioanrProd.length;i++){
    adicioanrProd[i].addEventListener("click" , function(event){
        const botao = event.target.parentElement
        const nomeProduto = botao.querySelector(".car_prod p").innerText;
        const valorProd = botao.querySelector(".car_prod strong").innerText;
        const imagProd= botao.querySelector(".car_prod img").src

        console.log(nomeProduto)
        
    } );

}

let novoProdutCar = document.createElement("tr");
novoProdutCar.classList.add("produtos_carAdd");

novoProdutCar.innerHTML=

`
               <td class="img_pro_car">
                    <img src="${imagProd}">
                </td>
                <td><p>${nomeProduto}</p></td>
                <td><strong>${valorProd}</strong></td>
                <td><input type="number" min="0"   value="1" class="valor_input_prod"></td>
                <td>
                    <button type="button" class="remove_prod">Remover</button>
                </td>

`

const tabelaBody = document.querySelector(".tabela_car tbody")
tabelaBody.append(novoProdutCar);



}

    






   


        
