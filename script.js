const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const nota3 = document.querySelector("#nota3");
let media = 0;
const resultado = document.querySelector("#resultado_medias");
let situacaoAluno = "";
const situacao = document.querySelector("#situacao");
const exibicao = document.querySelector("#exibicao");
const mostrar = document.querySelector("#submit");
const formulario = document.querySelector("#formulario");
const exibirN = document.querySelector('#exibirN');
const exibirI = document.querySelector('#exibirI');
const exibir1 = document.querySelector('#exibirN1');
const exibir2 = document.querySelector('#exibirN2');
const exibir3 = document.querySelector('#exibirN3');


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3;
    resultado.textContent = media.toFixed(2);

    if (media >= 7) {
        situacaoAluno = "Situação:Aprovado."
        situacao.classList.add("cor1");
    }
    else if (media >= 5) {
        situacaoAluno = "Situação:Recuperação."
        situacao.classList.add("cor2");
    }
    else {
        situacaoAluno = "Situação:Reprovado."
        situacao.classList.add("cor3");
    }

    situacao.textContent = situacaoAluno;
    

     
    const exibir = nome.value.trim();
    exibirN.textContent = ("Nome: " + exibir)

    const exibir1 = Number(idade.value);
    exibirI.textContent = ("Idade: " + exibir1)

    const exibir2 = Number(nota1.value);
    exibirN1.textContent = ("Primeira nota: " + exibir2)

    const exibir3 = Number(nota2.value);
    exibirN2.textContent = ("Segunda nota: " + exibir3)
    
    const exibir4 = Number(nota3.value);
    exibirN3.textContent = ("Terceira nota: " + exibir4)

});
