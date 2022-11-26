// Control flow - if else

let temperature = 37.5
if(temperature < 37){
    console.log("Sem febre")
} else if(temperature >=37 && temperature <=38) {
    console.log("Febre baixa")
} else {
    console.log("Febre alta")
}
//Outra forma
//Declaro a condição na própria variável
let temperature1 = 36
let highTemperature = temperature < 37
let mediumTemperature = temperature >=37 && temperature <= 38

if(highTemperature) {

} else if(mediumTemperature) {

} else {

}

//swicth 
let expression = ''
switch (expression) {
    case 'a':
    //Código
    console.log('a')
    break //encerra o código aqui, se não der o break, ele continua executando as próximas linhas até o outro break
    case 'b':
    //Código para expressão b
    console.log('b')
    break
    default: //Caso não chegue em nenhuma das expressões acima, ele pausa aqui
    console.log('default')
    break
}

//throw = disparar lançar
//try = tentar
//catch = pegar
function sayMyName(name1 = '') {
    if (name1 === ''){
        throw 'Nome é obrigatório'
    }
    console.log(name1)
}

try{
    sayMyName('Pedro')
}catch(e) {
    console.log(e)
}

console.log('Após try catch')

//Estrutura de repetição
//for

for(let i = 2; i < 10; i++) {
    console.log(i)
}

//while = enquanto
let x = 100000
while(x > 10){
    console.log(x)
    x /= 50; //Se não tiver essa soma, o x < 10 será verdadeiro para sempre e continuará rodando sem parar
}

//Quando usar while ou for? While se mais quando não sabemos o tempo da parada, ele vai fazer até a quantidade que estiver delimitada, porém não se sabe muito quantas vezes ele será executado

//for...of
let name3 = 'Pedro'
let names3 = ['Larissa', 'Joao', 'Pedro'] //array

for(let char of name3){ // = let char of name3 = pegue um caractere de name3
    console.log(char) //Imprime na tela letra por letra do nome descrito no name3
}
//Outro exemplo
for(let name3 of names3){
    console.log(name3) //Irá pegar cada nome dentro da array names3 e passsará para name3, imprimindo na tela o cada nome escrito dentro da array
}

//for...in  -  pega as propriedades do objeto
let person = { //objeto
    name: 'Pedro',
    age: 30,
    weight: 90
}
for(let property in person){ // no objeto, pegue a propriedade e atribua a variável let
    console.log(property)
}

//Reforçando - Array, atribui várias variáveis dentro de si mesma - Objeto, atribui várias propriedades diferentes dentro, como nos exemplos acima