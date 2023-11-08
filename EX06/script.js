let caixa = document.querySelector("body")
let cor = document.querySelector('input')

const corpadrao = '#fff'
caixa.style.querySelector = `${corpadrao}`

function mudar(){
    
    caixa.style.backgroundColor = `${cor.value}`
}