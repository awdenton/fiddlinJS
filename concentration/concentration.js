
let flipped = false;
let allowFlip = true;
let score = 0;

const SYMBOLS = [`&#128092;`, `&#129406;`, `&#127913;`, `&#128374;`, `&#127875;`, `&#127942;`, `&#129528;`, `&#128050;`]
const DECK_SIZE = SYMBOLS.length * 2;

function buildDeck() {
    let board = document.querySelector(`#game-board`);
    let card = document.querySelector(`#card-template`);
    let cards = [];

    for(let i = 0; i < DECK_SIZE; i++) {
        let clone = card.content.cloneNode(true);
        clone.querySelector(`.card-front`).innerHTML = SYMBOLS[Math.floor(i/2)];
        cards.push(clone);
    }

    shuffle(cards);

    for(let i = 0; i < cards.length; i++) {
        board.append(cards[i]);
    }
}

function shuffle(arr) {
    for(let i = arr.length -1 ; i > 0; i--) {
        let newI = Math.floor(Math.random() * (i+1));
        [arr[i], arr[newI]] = [arr[newI], arr[i]];
    }
}

function flip(el) {
    if(allowFlip) {
        el.classList.toggle('flipped');
        flipped = !flipped;
        if(!flipped) {
            allowFlip = false;
            setTimeout(checkMatch, 2500);
        }
    }
}

function checkMatch() {
    let cards = document.getElementsByClassName(`flipped`);

    console.log(cards[0].querySelector(`.card-front`).innerHTML);
    console.log(cards[1].querySelector(`.card-front`).innerHTML);

    if(cards[0].querySelector(`.card-front`).innerHTML === cards[1].querySelector(`.card-front`).innerHTML) {
        document.getElementById(`score-field`).innerHTML = ++score;
        for(let i = 0; i < cards.length; i++) {
            console.log(cards[i].removeEventListener(`click`, flip));
        }
    } else {
        while(cards.length > 0) {
            cards[0].classList.toggle("flipped");
        }
    }
    allowFlip = true;
}

buildDeck();