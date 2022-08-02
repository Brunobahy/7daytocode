alert("Vamos brincar de adivinhar!!");
let numero = Math.floor(Math.random() * (10 - 1 + 1) + 1);

for(i = 0; i<3;){
    chute = prompt("Chute um numero de 1 - 10");
    i++
    if(chute == numero){
        alert(`"Uau Você mandou bem meus parabens você precisou de ${i} tentativas"`)
        break
    }else if(i == 3){
        alert(`"infelizmente você perdeu!! o numero era ${numero}"`)
    }else{
        alert(`"Você tem mais ${3-i} tentativas!"`)
    }
}