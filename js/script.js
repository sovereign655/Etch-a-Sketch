document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('etch-a-sketch');
    const clearButton = document.getElementById('clear-btn');
    const gridSize = 20; // 20x20 grid

    // Function to create grid
    function createGrid(size) {
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = 'black'; // Change color on mouseover
            });
            grid.appendChild(gridItem);
        }
    }

    // Function to clear grid
    function clearGrid() {
        grid.innerHTML = '';
        createGrid(gridSize);
    }

    clearButton.addEventListener('click', clearGrid);

    // Initialize grid
    createGrid(gridSize);
});
