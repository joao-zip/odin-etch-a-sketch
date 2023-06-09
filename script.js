function makeGrid(size) {
    let grid = document.querySelector(".grid-container");
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        let gridElement = document.createElement("div");
            
        grid.appendChild(gridElement);
    }

}

makeGrid(32);
