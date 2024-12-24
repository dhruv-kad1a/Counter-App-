const counter =  document.querySelector('.counter');
const addBtn =   document.querySelector('.add-btn');
const subtractBtn = document.querySelector('.subtract-btn');
const changeBy = document.querySelector('.changeBy');
const resertBtn = document.querySelector('.resetBtn');

addBtn.addEventListener('click', () => {
    // counter.textContent = parseInt(counter.textContent) + 1;
    const countValue = parseInt(counter.innerText);
    const changeValue = parseInt(changeBy.value);
    counter.innerText = countValue + changeValue;
})

subtractBtn.addEventListener('click', () => {
    const countValue = parseInt(counter.innerText);
    const changeValue = parseInt(changeBy.value);
    counter.innerText = countValue - changeValue;   
})

resertBtn.addEventListener('click', () => {
    counter.innerText = 0;
    changeBy.value = 1;
})

