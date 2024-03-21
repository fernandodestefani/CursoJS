function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    if (inicio == '' || fim == '' || passo == ''){
        res.innerHTML = '<p>Impossível contar!</p>'
    } else if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO = 1')
    } else {
        var contagem = ''
        if (inicio < fim) {
            for (var i = inicio; i <= fim; i += passo) {
                contagem += `${i} ➡️ `
            }    
        } else {
            for (var i = inicio; i >= fim; i -= passo) {
                contagem += `${i} ➡️ `
            }
        }
        
        res.innerHTML = `<p>Contando...</p>
                        <p>${contagem.slice(0, -3)}</p>`
    }
}