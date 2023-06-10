const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let clrInterval;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

startBtn.addEventListener('click', ()=>{
    clrInterval = setInterval(()=>{
    bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBtn.disabled = true;
});


stopBtn.addEventListener('click', ()=>{
    clearInterval(clrInterval);
    bodyEl.style.backgroundColor = `#FFFFFF`;
    startBtn.disabled = false;
    
})