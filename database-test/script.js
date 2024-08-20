// Lade die Firebase-Funktionen von der globalen `firebaseDatabase`-Variable
const { getCounterValue, incrementCounter } = window.firebaseDatabase;

function createSchinken() {
    const schinken = document.createElement('div');
    schinken.className = 'schinken';
    schinken.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(schinken);

    schinken.addEventListener('animationend', () => {
        schinken.remove();
    });
}

function updateCounter() {
    getCounterValue().then(count => {
        document.getElementById('counter-display').innerText = `Generierte Schinken: ${count}`;
    });
}

function startParty() {
    const audio = document.getElementById('background-music');
    audio.play();

    document.getElementById('start-screen').style.display = 'none';

    setInterval(() => {
        createSchinken();
        incrementCounter().then(() => {
            updateCounter();
        });
    }, 300);
}

// Initiale Anzeige des Zählerstands
updateCounter();