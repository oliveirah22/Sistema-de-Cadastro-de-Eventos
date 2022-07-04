//Sistema de Cadastro Eventos - Codificação

let idade = 0;
let listaDeParticipantes = 0;
let dataDoEvento = 0;

idade = prompt("Informe sua idade");
if (idade >= 18) {
    listaDeParticipantes = prompt("cadastro permitido");

    if (idade <18)
    listaDeParticipantes = prompt("cadastro não permitido");

}

listaDeParticipantes = prompt("Checando lista de participantes e palestrantes");
if (listaDeParticipantes <100) {
    listaDeParticipantes = prompt("Informe a data do evento");

    if (listaDeParticipantes =100)
    listaDeParticipantes = prompt("Cadastro não permitido");
    
    if (dataDoEvento < 04/07/2022)
    dataDoEvento = prompt("Cadastro não permitido");

    if (dataDoEvento >= 04/07/2022)
    console.log("Cadastro realizado com Sucesso")
}

    

