function makeGrid(size) {
    let grid = document.querySelector(".grid-container");
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        let gridElement = document.createElement("div");
            
        grid.appendChild(gridElement);
    }

}



let gridRange = document.getElementById("menu-range"); 
gridRange.addEventListener('click', () => {
    let value = gridRange.value;
    makeGrid(value);
    document.querySelector(".size").innerHTML = `Size: ${value} x ${value}`;
})
