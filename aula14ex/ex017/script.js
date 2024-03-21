function tabuada() {
    var num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    // var res = document.getElementById('res')

    if (num.value == '') {
        window.alert('Por favor digite um número!')
    } else {
        // res.innerHTML = ''
        tab.innerHTML = ''
        for (var cont = 1; cont <= 10; cont++) {
            let item = document.createElement('option')
            item.text = `${num.value} X ${cont} = ${num.value * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
        }
    }
}