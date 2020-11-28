var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
//id utiliza #
//classe usa .
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
var tdPeso = pacientes[i].querySelector(".info-peso");

var paciente = pacientes[i];

var peso = tdPeso.textContent;

var tdAltura = pacientes[i].querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = pacientes[i].querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdIMC.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdIMC.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
}

if(pesoEhValido && alturaEhValida){
var imc = peso/(altura*altura);
tdIMC.textContent = imc.toFixed(2);
}

console.log(imc);
console.log(pacientes[i]);
console.log(altura);
console.log(peso);
}