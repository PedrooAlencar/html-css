/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/

/* MINHA TENTATIVA
let propriedades = {
    receitas: [],
    despesas: []
}
function getTotal(total){
    let prop = prompt("Receita/Despesa: ")
    switch(prop){
        case 'receitas':
        let totalFinal = prompt("Valor: ")
        totalFinal = total + receita
        console.log("Receitas" + total)
        break
        case 'desepesas':
        let despesa = prompt("Despesa")
        totalFinal = total - desepesa
        console.log("Despesas" + total)
        break
        default:
        console.log('default')
        break
    }
    return totalFinal;
}
*/

//solução rockseat
let family = {
    receitas: [2500, 3200, 250.32, 321.34],
    despesas: [320.34, 128.32, 321, 1000]
}

function sum(array) {
    let total = 0
    for(let value of array){ //pega valor do array
        total += value
    }
    return total
}

function calcularBalanco(){
    const calculoReceitas = sum(family.receitas)
    const calculoDespesas = sum(family.despesas)

    const total = calculoReceitas - calculoDespesas

    const ok = total >= 0
    let message = "negativo"
    if(ok){
        message = "positivo"
    }
    console.log(`Seu saldo é ${message}: ${total}`)

}
calcularBalanco()
