/* 
Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

//MINHA RESOLUÇÃO
// let nota = prompt("Nota: ") - Opção para digitar na tela
let nota = 100
    if(nota < 60){
        nota = 'F'
        console.log(nota)
    } else if(nota <= 70){
        nota = 'D'
        console.log(nota)
    } else if(nota <= 80){
        nota = 'C'
        console.log(nota)
    } else if(nota <= 90){
        nota = 'B'
        console.log(nota)
    } else{
        nota = 'A'
        console.log(nota)
    }

//RESOLUÇÃO ROCKSEAT
let score = 100
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0
let scoreFinal;

    if (scoreA){
        scoreFinal = 'A'
    } else if(scoreB){
        scoreFinal = 'B'
    }
    else if(scoreB){
        scoreFinal = 'C'
    }
    else if(scoreC){
        scoreFinal = 'D'
    }
    else if(scoreD){
        scoreFinal = 'E'
    }
    else if(scoreF){
        scoreFinal = 'F'
    } else{
        scoreFinal = "Nota inválida"
    }

console.log(scoreFinal)

//Fazendo dentro uma uma function
/*

    function getScore(score) {
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0
let scoreFinal;

    if (scoreA){
        scoreFinal = 'A'
    } else if(scoreB){
        scoreFinal = 'B'
    }
    else if(scoreB){
        scoreFinal = 'C'
    }
    else if(scoreC){
        scoreFinal = 'D'
    }
    else if(scoreD){
        scoreFinal = 'E'
    }
    else if(scoreF){
        scoreFinal = 'F'
    } else{
        scoreFinal = "Nota inválida"
    }
return scoreFinal
}
console.log(getScore(50))
console.log(getScore(60))
console.log(getScore(70))
console.log(getScore(80))
console.log(getScore(91))

*/