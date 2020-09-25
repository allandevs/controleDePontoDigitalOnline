var inputs = $('input').on('keyup', verificarInputs);
function verificarInputs() {
    const preenchidos = inputs.get().every(({value}) => value)
    $('button').prop('disabled', !preenchidos);
}
