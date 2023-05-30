const form = document.getElementById('form');
const inputValue = document.getElementById('value-real')
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
form.addEventListener('submit', handleSubmit);
let valueConverter = 0;
function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.value || inputValue.value <= 0) {
        alert('Informe o valor correto!');
        return;
    }
    else if (!selectedCurrency.value) {
        alert('Escolha uma moeda!');
    } convert();
}
function convert() {
    if (selectedCurrency.value == 'eur') {
        valueConverter = inputValue.value / 5.38;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
        playAudio();
        setTimeout(animateResult(), 5000);
    }
    else if (selectedCurrency.value == 'dol') {
        valueConverter = inputValue.value / 5.02;
        result.innerHTML = valueFormatter('en-US', 'USD');
        playAudio();
        setTimeout(animateResult(), 5000);
    }
    result.innerHTML = valueConverter;
    inputValue.value = '';
    selectedCurrency.value = '';
}
function valueFormatter(Locale, currency) {
    const value = valueConverter.toLocaleString(`${Locale}`, { style: 'currency', currency: `${currency}` });
    return `<span>💲</span> ${value} <span>💲</span>`;
}
function animateResult() {
    return result.animate([
        { transform: 'translateY(-150px)' },
        { transform: 'translateX(0px)' },
    ], { duration: 500 });
}
function playAudio() {
    let x = document.getElementById("myAudio");
    x.play();
}