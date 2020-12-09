const p1total = document.querySelector('#p1total');
const p2total = document.querySelector('#p2total');
const p1point = document.querySelector('#p1point');
const p2point = document.querySelector('#p2point');
const reset = document.querySelector('#reset');
const scoreMax = document.querySelector('#scoreMax');
let goal = parseInt(document.querySelector('#scoreMax').value);

scoreMax.addEventListener('change',(e) => {
    goal = parseInt(document.querySelector('#scoreMax').value);
})

p1point.addEventListener('click',(e) => {
    e.preventDefault();
    let score = (parseInt(p1total.innerText) + 1)
    p1total.innerText = score;
    if (score >= goal) {
        victory(p1total,p2total);
    }
})
p2point.addEventListener('click',(e) => {
    e.preventDefault();
    let score = (parseInt(p2total.innerText) + 1)
    p2total.innerText = score;
    if (score >= goal) {
        victory(p2total,p1total);
    }
})
reset.addEventListener('click',(e) => {
    e.preventDefault();
    p1point.disabled = false;
    p2point.disabled = false;
    p1total.removeAttribute('style');
    p2total.removeAttribute('style');
    p1total.innerText = '0';
    p2total.innerText = '0';
})

function victory(winner,loser){
    p1point.disabled = true;
    p2point.disabled = true;
    // Was trying to avoid all styling but this was part of the challenge
    winner.style.color = 'green';
    loser.style.color = 'red';
}