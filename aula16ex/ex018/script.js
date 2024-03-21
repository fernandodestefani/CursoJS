var num = document.getElementById('txtn')
var painel = document.getElementById('painel')
var valores = []
var resultado = document.getElementById('resp')

function adicionar() {
    if (num.value == '' || num.value < 1 || num.value > 100) {
        window.alert('Valor inválido')
    } else if (valores.indexOf(num.value) != -1) {
        window.alert('Valor já adicionado na lista')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        item.value = num.value
        painel.appendChild(item)
        valores.push(Number(num.value))
        resultado.innerHTML = ''               
    }
    num.value = ''
    num.focus()

}

function analisar() {
    if (valores == '') {
        window.alert('Adicione valores antes de finalizar')
    } else {

        var soma = 0
        valores.sort((a, b) => a - b)
        for (let pos in valores) {
            soma += Number(valores[pos])
        }
        resultado.innerHTML = `
            <p>Temos ao todo ${valores.length} números cadastrados</p> 
            <p>O maior valor informado foi ${valores[valores.length - 1]}</p>
            <p>O menor valor informado foi ${valores[0]}</p>
            <p>Somando todos os valores, temos ${soma}</p>
            <p>A média dos valores digitados foi ${soma / valores.length}</p>`

    }
}