"use strict";
const pixels = [];
function createPixel(pixel) {
    const pixelBtn = document.createElement('button');
    return pixelBtn;
}
function createCanvas() {
    const canvasColumns = 8;
    const canvasRows = 8;
    const canvas = document.getElementById('canvas');
    for (let x = 0; x < canvasColumns; x++) {
        for (let y = 0; y < canvasRows; y++) {
            pixels.push({ x: x, y: y, active: false });
            const pixelBtn = createPixel({ x: x, y: y, active: false });
            canvas === null || canvas === void 0 ? void 0 : canvas.append(pixelBtn);
        }
    }
    console.table(pixels);
}
createCanvas();
