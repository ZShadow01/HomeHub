let pointerState = false;
let pointerStartPositionY = null;


function onPointerDown(event) {
    if (pointerState) return;

    pointerState = true;
    pointerStartPositionY = event.clientY;
}


function onPointerUp(event) {
    if (!pointerState) return;

    pointerState = false;

    const apps = document.getElementById('apps');
    const diff = event.clientY - pointerStartPositionY;

    apps.style.transform = 'translateY(0)';

    if (diff > 150) {
        apps.classList.remove('active');
    } else if (diff < -150) {
        apps.classList.add('active');
    }
}


function onPointerMove(event) {
    if (!pointerState) return;

    console.log(event.clientY);

    const apps = document.getElementById('apps');

    const diff = event.clientY - pointerStartPositionY;

    if (!apps.classList.contains('active')) {
        if (diff < -150) return;

        apps.style.transform = `translateY(${diff}px)`;
    } else {
        if (diff > 150 || diff < 0) return;

        apps.style.transform = `translateY(${diff}px)`;
    }
}


window.addEventListener('pointerdown', onPointerDown);
window.addEventListener('pointerup', onPointerUp);
window.addEventListener('pointermove', onPointerMove);
