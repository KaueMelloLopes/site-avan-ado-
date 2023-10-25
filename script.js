document.addEventListener('DOMContentLoaded', function () {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calculateButton = document.getElementById('calculate');
    const resultSpan = document.getElementById('result');

    calculateButton.addEventListener('click', function () {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const result = num1 + num2;
        resultSpan.textContent = result;
    });
});
