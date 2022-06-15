function contar() {
    //o let substitui o var
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        res.innerHTML = 'Imposível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        //window.alert('Tudo OK!')
        res.innerHTML = 'Contando: <br>'
        //Convertendo txt para numero
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}