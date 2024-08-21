let schinkenCount = 0;
let lastCreationTime = 0;
const creationInterval = 300; // Intervall in Millisekunden
const creationIntervalMs = creationInterval; // Intervall in Millisekunden

function createSchinken() {
    const schinken = document.createElement('div');
    schinken.className = 'schinken';

    // Ermitteln der Bildschirmgröße
    const viewportWidth = window.innerWidth;

    // Die feste Größe des Schinkens
    const schinkenWidth = 50; // Breite des Schinkens

    // Positioniere Schinken innerhalb des sichtbaren Bereichs
    const maxLeft = viewportWidth - schinkenWidth;
    const randomLeft = Math.random() * maxLeft;

    schinken.style.left = `${randomLeft}px`;
    schinken.style.top = `-${schinkenWidth}px`; // Schinken beginnt oben außerhalb des sichtbaren Bereichs

    document.body.appendChild(schinken);

    // Schinken entfernen
    schinken.addEventListener('animationend', () => {
        schinken.remove();
    });

    // Schinken zählen
    schinkenCount++;
    updateSchinkenCounter();
}

function updateSchinkenCounter() {
    const counterElement = document.getElementById('schinken-counter');
    counterElement.textContent = `Schinken: ${schinkenCount}`;
}

function gameLoop(currentTime) {
    if (currentTime - lastCreationTime >= creationIntervalMs) {
        createSchinken();
        lastCreationTime = currentTime;
    }
    requestAnimationFrame(gameLoop);
}

function startParty() {
    // Musik starten
    const audio = document.getElementById('background-music');
    audio.play();

    // Startbildschirm ausblenden
    document.getElementById('start-screen').style.display = 'none';

    // Schinken Counter sichtbar machen
    document.getElementById('schinken-counter').style.display = 'block';

    // Start der Spielschleife
    lastCreationTime = performance.now();
    requestAnimationFrame(gameLoop);
}