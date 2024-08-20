let schinkenCount = 0;

function createSchinken() {
    const schinken = document.createElement('div');
    schinken.className = 'schinken';
    schinken.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(schinken);

    // Schinken entfernen
    schinken.addEventListener('animationend', () => {
        schinken.remove();
    });

    // Schinken zählen
    schinkenCount++;
    updateSchinkenCounter();
}

function startParty() {
    // Musik starten
    const audio = document.getElementById('background-music');
    audio.play();

    // Startbildschirm ausblenden
    document.getElementById('start-screen').style.display = 'none';

    // Schinken Counter sichtbar machen
    document.getElementById('schinken-counter').style.display = 'block';

    // Schinken Intervall
    setInterval(createSchinken, 300);
}

function updateSchinkenCounter() {
    const counterElement = document.getElementById('schinken-counter');
    counterElement.textContent = `Schmackhafte Schinken: ${schinkenCount}`;
}