
var dado = document.getElementById("dados");

//dado.innerHTML= "hello";
dado.style.fontSize="15px";

var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const horas = new Date();
dado.innerHTML= "Mês atual: "+meses[horas.getMonth()]+ "<br>"+ "<br>";

for (var i = 0 ; i < 12 ; i++){
    dado.innerHTML += meses[i] + "<br>";

    if(i == 10) {
        dado.innerHTML += "Ta chegando o natal hein, Prepare-se"+ "<br>";
    }
};

console.log(horas);