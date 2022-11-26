/* 
Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

//MINHA RESOLUÇÃO
let nota = prompt("Nota: ")
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