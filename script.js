const form = document.getElementById('form');
const inputValue = document.getElementById('value-real')
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
form.addEventListener('submit', handleSubmit);
let valueConverter = 0;

function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.value || inputValue.value < 0) {
        alert('Informe o valor correto!');
        return;
    }
    else if (!selectedCurrency.value) {
        alert('Escolha uma moeda!');
    }
    convert();
}
function convert() {
    if (selectedCurrency.value == 'eur') {
        valueConverter = inputValue.value / 5.38;
    }
    else if (selectedCurrency.value == 'dol') {
        valueConverter = inputValue.value / 5.02;
    }
    result.innerHTML = valueConverter;
}
function valueFormatter() {

}