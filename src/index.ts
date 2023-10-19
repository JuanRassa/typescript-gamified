const pixels: { x: number; y: number; active: boolean }[] = [];

function createPixel(pixel: {
  x: number;
  y: number;
  active: boolean;
}): HTMLButtonElement {
  const pixelBtn = document.createElement('button');

  return pixelBtn;
}

function createCanvas(): void {
  const canvasColumns = 8;
  const canvasRows = 8;
  const canvas = document.getElementById('canvas');

  for (let x = 0; x < canvasColumns; x++) {
    for (let y = 0; y < canvasRows; y++) {
      pixels.push({ x: x, y: y, active: false });

      const pixelBtn = createPixel({ x: x, y: y, active: false });
      canvas?.append(pixelBtn);
    }
  }
  console.table(pixels);
}

createCanvas();
