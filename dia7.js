function somar() {
    console.log(resultado = num1 + num2);
}
function subtrair(){
    console.log(resultado = num1 - num2);
}
function multiplicar() {
    console.log(resultado = num1 * num2);
}
function dividir () {
    console.log(resultado = num1 / num2);
}
let listaComparacao = ["+","-","*","/"];

while (true) {
    var operacao = prompt("Escolha uma operação, ou escreva sair! (+, -, *, /, sair)");

    if(operacao == "sair"){
        break
    }

    var num1 = parseFloat(prompt("Escolha o primeiro numero:"));
    var num2 = parseFloat(prompt("Escolha o segundo numero:"));

        if(operacao == listaComparacao[0]){
            somar()
        }
        if(operacao == listaComparacao[1]){
            subtrair()
        }
        if(operacao == listaComparacao[2]){
            multiplicar()
        }
        if(operacao == listaComparacao[3]){
            dividir()
        }
}