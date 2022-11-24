/* 
Type conversion (typecasting) vs Type coesion

    Type coesion: Dados são alterados de forma automática, sem manipulção
    Type conversion: Dados manipulados pelo adm
* Alteração de um tipo de dado para outro tipo
*/

//Exemplo
let string = "123"
console.log(Number('17') + 4)
let number = 321
console.log(String(Number))

//Contagem de caracteres
let word = "paralelepipedo"
console.log(word.lenght)
let number1 = 1234
console.log(number.lenght)

//Trocar qtd de casas decimais e ponto de separação
let number2 = 345.9293992
console.log(number2.toFixed(2).replace(".", ",")) //trocando . por ,

//Transformando letras maísculas em minúsculas e vice-versa
let word1 = "Programa é muito show!"
console.log(word.toUpperCase) //toLowerCase = Tudo minúsulo / toUpperCase = Tudo maiúsculo

//Separando textos que contém espaços, em um novo array onde cada texto é uma posição do array
let phrase = "Eu quero viver algo novo!"
let myArray = phrase.split(" ") //Separando por espaço (pode ser qualquer outro elemento para separar, como , . "" ou até letras)
console.log(myArray)
//Para substituir o espaço por outro item
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

//Verificar se o texto contém uma palavra em específico
let phrase1 = "Vem me visitar hoje aqui!"
console.log(phrase1.includes("Vem")) // Letras maiúsculas e minúsculas fazem a diferença

//Criar Array com construtor
// let myArray2 = ['a', 'b', 'c'] - Array sem construtor
let myArray3 = new Array('a', 'b', 'c') //Array com construtor
console.log(myArray)

//Contar elementos de um array
console.log(["a", 
{type: "array"}, 
function() { return "alo"},
][2]()) //esse [2]() busca o segundo da lista e retorna o alo - se fosse pra buscar o objeto na posição 1, seria [1].type
//versão mais simplificada de fazer essa manipulação
console.log(["a", "b", "c"].length) //mostra quantos elementos tem no array

//Transformar uma cadeia de caracteres em elementos de um array
let word2 = "manipulação"
console.log(Array.from(word2)) //cada letra virou um elemento do array, 0 = m / 1 = a / 2 = n etc

//Manipulando arrays
let techs = ["html", "css", "js"]
//adicionar um item no fim
console.log(techs.push("nodejs")) //foi adicionado nodejs depois do js
//adicionar no começo
techs.unshift("sql") // Adicionado antes do html
//Remover do final
techs.pop() //Já escluiu a última info
techs.pop() //Continua removendo
//Removendo do começo
techs.shift() //removel o primeiro item
//pegar somente alguns elementos do Array
console.log(techs.slice(1, 2))// (posição, até qual item irá buscar) //Não modifica, apenas da como retorno
//Remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 2) //Removeu 1, até quantos eu quiser, que foi 2
//Encontrar posição de um elemento no array
let index = techs.indexOf('css') //Qual é o idnex do css?
console.log(index, 1) // encontrei a pósição, agora se eu quiser excluir, bastaa pegar a posilção e dar um techs.splice(index, ')

console.log(techs)

