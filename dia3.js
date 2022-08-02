const area = prompt("Você gostaria de estudar front-end ou back-end?");

if(area == "front-end"){
    espec = prompt("Você gostaria de aprender React ou aprender Vue?");
}else if(area == "back-end"){
    espec = prompt("Você gostaria de aprender C# ou aprender Java?");
}

const respComp = `"Você gostaria de se especializar em ${area} voltado para ${espec} ou se tornar Fullstack?"`;
const prof = prompt(respComp);

for(i = 0;i < 1;){
    const tec = prompt("Qual tecnologia gostaria de aprender?");
    const resposta = prompt(`"gostaria de colocar mais uma tecnologia? /br (Coloque 'S' para sim e 'N' para não)"`)
    if(resposta.toLowerCase() == "n"){
    i++
    }
}
if(prof == "fullstack"){
    console.log("Nossa que legal que você quer se tornar fullstack, meus parabens!!")
}else{
console.log(`"Que legal que você esta estudando ${area} voltado para ${espec} e quer se especializar nisso continue se esforçando!!"`)
}