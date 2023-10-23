"use strict";
const pixels = [];
function createPixel(pixel) {
    const pixelBtn = document.createElement('button');
    pixelBtn.setAttribute('data-x-coordinate', pixel.x.toString());
    pixelBtn.setAttribute('data-y-coordinate', pixel.y.toString());
    pixelBtn.setAttribute('data-active', pixel.active.toString());
    pixelBtn.classList.add('pixelBtn');
    pixelBtn.id = `${pixel.x}-${pixel.y}`;
    pixelBtn.onclick = function () {
        updateState(pixel.x, pixel.y);
        refreshCanvas();
    };
    return pixelBtn;
}
function updateState(x, y) {
    const pixelToUpdate = pixels.find(p => p.x == x && p.y == y);
    if (pixelToUpdate)
        pixelToUpdate.active = !pixelToUpdate.active;
}
function createCanvas() {
    const canvasSize = 8;
    // const canvasColumns = 8;
    // const canvasRows = 8;
    const canvas = document.getElementById('canvas');
    for (let x = 0; x < canvasSize; x++) {
        for (let y = 0; y < canvasSize; y++) {
            pixels.push({ x: x, y: y, active: false });
            const pixelBtn = createPixel({ x: x, y: y, active: false });
            canvas === null || canvas === void 0 ? void 0 : canvas.append(pixelBtn);
        }
    }
    // console.table(pixels);
}
function refreshCanvas() {
    for (const p of pixels) {
        const pixelBtn = document.getElementById(`${p.x}-${p.y}`);
        if (pixelBtn) {
            console.log(typeof pixelBtn);
            pixelBtn.style.backgroundColor = p.active ? '#28bb84' : '#efefe1';
        }
    }
}
createCanvas();
