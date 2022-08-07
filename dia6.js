var frutas = []
var laticinios = []  
var congelados = []
var doces = []  
var comparativo = ["frutas", "laticinios", "congelados", "doces"]
var categoria = [frutas, laticinios, congelados, doces]
var lista = []
escolha = []

while(true){
    
    resposta = prompt("Você quer adicionar algo na sua lista?");
    if(resposta == "nao"){
        break
    }
    comida = prompt("Qual comida deseja inserir?");

    escolha = prompt("Qual categoria este produto pertence? (frutas, laticínios, congelados, doces)");
    

    for(i=0; i<comparativo.length; i++){
        if(escolha == comparativo[i]){
            categoria[i].push(comida);
            lista.push(comida)
        }else{
            alert("Categoria invalida");
            break
        }
        
    }
    remover = prompt("Você gostaria de remover algum item?");

    if(remover == "sim"){

        var excluir = prompt("Escolha um dos itens: "+lista);

        if(excluir == lista[lista.indexOf(excluir)]){

           

            for(x=0; x<lista.length; x++){

                if(excluir == frutas[x]){
                    frutas.splice(x, 1);
                }
                if(excluir == laticinios[x]){
                    laticinios.splice(x, 1);
                }
                if(excluir == congelados[x]){
                    congelados.splice(x, 1);
                }
                if(excluir == doces[x]){
                    doces.splice(x, 1);
                }
                
                
            }
            lista.splice(excluir,1);
        }else{
            alert("Este item já não se encontra na lista")
        }
    
    

    }else continue

}
console.log("Lista de compras:");
console.log("frutas: "+frutas);
console.log("laticínios: "+laticinios);
console.log("congelados: "+congelados);
console.log("doces: "+doces)