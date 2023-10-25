const pixels: { x: number; y: number; active: boolean; color: string }[] = [];
const unactivePixelColor = '#efefe1';
const arrayOfColors: string[] = ['black', 'gold', 'orange', 'royalblue', 'red', 'violet', 'green', 'blue', 'yellow', 'purple'];

const colorSelector: HTMLSelectElement = document.querySelector('#color-picker') as HTMLSelectElement;
const colorDisplay: HTMLElement = document.querySelector('#color-display') as HTMLElement;
colorDisplay.style.backgroundColor = arrayOfColors[0];

colorSelector.addEventListener('input', () => {
  colorDisplay.style.backgroundColor = colorSelector.value;
});

function createPixel(pixel: { x: number; y: number; active: boolean; color: string }): HTMLButtonElement {
  const pixelBtn = document.createElement('button');
  pixelBtn.setAttribute('data-x-coordinate', pixel.x.toString());
  pixelBtn.setAttribute('data-y-coordinate', pixel.y.toString());
  pixelBtn.setAttribute('data-active', pixel.active.toString());
  pixelBtn.setAttribute('data-color', pixel.color);
  pixelBtn.classList.add('pixelBtn');
  pixelBtn.id = `${pixel.x}-${pixel.y}`;

  pixelBtn.onclick = function () {
    updateState(pixel.x, pixel.y);
    refreshCanvas();
  };

  return pixelBtn;
}
function createColorOption(): void {
  arrayOfColors.forEach(color => {
    const colorPickerOption = document.createElement('option');
    colorPickerOption.setAttribute('value', color);
    colorPickerOption.innerHTML = color;
    colorSelector.append(colorPickerOption);
  });
}

function updateState(x: number, y: number): void {
  const pixelToUpdate = pixels.find(p => p.x == x && p.y == y);
  if (pixelToUpdate) {
    pixelToUpdate.active = !pixelToUpdate.active;
    if (pixelToUpdate.active) {
      pixelToUpdate.color = colorSelector.value;
    }
  }
}

function createCanvas(): void {
  const canvasSize = 23;
  const canvas = document.getElementById('canvas');

  for (let x = 0; x < canvasSize; x++) {
    for (let y = 0; y < canvasSize; y++) {
      pixels.push({ x: x, y: y, active: false, color: '#e1e1e1' });

      const pixelBtn = createPixel({
        x: x,
        y: y,
        active: false,
        color: '#e1e1e1',
      });
      canvas?.append(pixelBtn);
    }
  }
  createColorOption();
}

function refreshCanvas(): void {
  for (const p of pixels) {
    const pixelBtn = document.getElementById(`${p.x}-${p.y}`);
    if (pixelBtn) {
      pixelBtn.style.backgroundColor = p.active ? p.color : unactivePixelColor;
    }
  }
}

createCanvas();
