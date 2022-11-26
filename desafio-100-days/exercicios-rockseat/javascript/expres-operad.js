    /* Expressões e Operadores
- Expressions
- Operators
    Binary
    Unary
    Ternary
*/
let number // é uma expressão / ; não é obrigatório

//Excessões para obrigatoriedade do ;

(function() {
    console.log('alo')
})() //Expressão de uma função auto executável

/*Se o let = number recebesse 1, daria um erro por que o JS entenderia que execuraria o 1, passaria uma função como argumento e receberia de volta uma outra função/ Exemplo de como ele entende: 
let number = 1 ()()
então o certo seria colocar ; quando atribuido um valor para o let number com uma função depois, ficando assim: 

let number = 1;
(function() {
    console.log('alo')
    */

//Operadores
let number1 = 1
console.log(number1 + 1) //Binário

let number2 = 2
console.log(++number2) //Unário

console.log(true ? 'alo' : 'nada') //Ternário

/*New
* left-hand-side expression
* serve para criar um novo OBJETO
*/
let name1 = new String('Pedro')
name1.surName = "Gregório"
let age = new Number(23)
console.log(name1.surName, age)
let date = new Date('2022-11-24')
console.log(date)

//Operadores unários - typeof e delete
const person = {
    name2:'Pedro',
    age2: 23,
}
delete person.age2 //deletou age2
console.log(person)

//Operadores de comparação
// = receber / == igual
let one = 1
let two = 2
// Comparando com igual
console.log(two == 1) //false
console.log(one == "1") //True
//Comparando com diferente de
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != "1") //false
//Comparando de forma precisa
console.log(one !== 1) //false
console.log(one !== "1") //true porque ele verifica o tipo de dado, como o one declarado é um number e o escrito é string, ele dá true
//=== os 2 primeiros iguais sãoos valores, e o terceiro é o tipo
//Comparando maior e menor
console.log(one >= 1) //True
console.log(two <= one) //false
//Operadores de atribuição (Assigment)
let x
//assigment
x = 1
//adition / subtraction / multiplication / division / remainder assignment
//Todos citados acimas servem como o exemplo abaixo
x += 2 // Soma x + ele mesmo (x = x + 2)
console.log(x)
//Operadores lógicos
// and && / or || / not !
let pao = true
let queijo = false
const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim' //condicional
console.log(niceBreakfast)