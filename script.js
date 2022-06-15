function contar() {
    //o let substitui o var
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        window.alert('Tudo OK!')
    }
}