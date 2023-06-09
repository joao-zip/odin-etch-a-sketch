const ERASER = 1;
const DEFAULT = 2;
const RAINBOW = 3;

let colorMode = DEFAULT;

function makeGrid(size) {
    let grid = document.querySelector(".grid-container");
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        let gridElement = document.createElement("div");
        gridElement.addEventListener('mouseover', setColor);
        grid.appendChild(gridElement);
    }
}
 
function setColor(event) {
    if(colorMode == DEFAULT) {
        event.target.style.backgroundColor = document.querySelector('#color-selector').value;
    } else if(colorMode == ERASER) {
        event.target.style.backgroundColor = '#FFFFFF';
    } else if(colorMode == RAINBOW) {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let eraser = document.getElementById('menu-eraser');
eraser.addEventListener('click', () => {
    colorMode = ERASER;
})

let colorSelector = document.getElementById('color-selector');
colorSelector.addEventListener('click', () => {
    colorMode = DEFAULT;
})

let rainbow = document.getElementById('menu-rainbow');
rainbow.addEventListener('click', () => {
    colorMode = RAINBOW;
})

let gridRange = document.getElementById("menu-range"); 
document.querySelector(".size").innerHTML = `Size: ${gridRange.value} x ${gridRange.value}`;
makeGrid(gridRange.value);
gridRange.addEventListener('click', () => {
    let value = gridRange.value;
    makeGrid(value);
    document.querySelector(".size").innerHTML = `Size: ${value} x ${value}`;
})

