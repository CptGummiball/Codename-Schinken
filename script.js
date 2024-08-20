function createSchinken() {
    const schinken = document.createElement('div');
    schinken.className = 'schinken';
    schinken.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(schinken);

    // Schinken entfernen
    schinken.addEventListener('animationend', () => {
        schinken.remove();
    });
}

function startParty() {
    // Musik starten
    const audio = document.getElementById('background-music');
    audio.play();

    // Startbildschirm ausblenden
    document.getElementById('start-screen').style.display = 'none';

    // Schinken Intervall
    setInterval(createSchinken, 300);
}