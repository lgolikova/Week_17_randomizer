let btn = document.getElementById('generatebtn');
btn.addEventListener('click', () => {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        let random = Math.round((Math.random()*(20)) -10);
        numbers.push(random);
    }
    let min = Math.min.apply(Math, numbers);
    let max = Math.max.apply(Math, numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += +(numbers[i]);
    }
    let average = sum / 10;
    let mult = 1;
    for (let i = 0; i < numbers.length; i++) {
        mult *= +(numbers[i]);
    }
    document.querySelector('.numbers').innerHTML = `Результат: ${numbers.join(',')}`;
    document.querySelector('.min').innerHTML = `Минимальное число: ${min}`;
    document.querySelector('.max').innerHTML = `Максимальное число: ${max}`;
    document.querySelector('.average').innerHTML = `Среднее арифметическое: ${average}`;
    document.querySelector('.sum').innerHTML = `Сумма чисел: ${sum}`;
    document.querySelector('.mult').innerHTML = `Произведение чисел: ${mult}`;
})

