    var frutas = []
    var laticinios = []  
    var congelados = []
    var doces = []  
    var comparativo = ["frutas", "laticinios", "congelados", "doces"]
    var categoria = [frutas, laticinios, congelados, doces]
    escolha = []

    while(true){
        resposta = prompt("Você quer adicionar algo na sua lista?");
        if(resposta == "nao"){
            break
        }
        comida = prompt("Qual comida deseja inserir?");

        escolha = (prompt("Qual categoria este produto pertence? (frutas, laticínios, congelados, doces)"));
       
        for(i=0; i<comparativo.length; i++){
            if(escolha == comparativo[i]){
                categoria[i].push(comida);
            }
        }

    }
    console.log("Lista de compras:");
    console.log("frutas: "+frutas);
    console.log("laticínios: "+laticinios);
    console.log("congelados: "+congelados);
    console.log("doces: "+doces)
