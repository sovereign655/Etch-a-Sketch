document.addEventListener('DOMContentLoaded', () => {
    var grid = document.getElementById('etch-a-sketch');
    var clearButton = document.getElementById('clear-btn');
    var coordinateElement = document.getElementById('Coordinate');
    var gridSize = parseInt(document.getElementById('gridsize-dropdown').value);
    
    var color = document.getElementById('color-dropdown').value;

    document.getElementById('color-dropdown').addEventListener('change', function() {
        color = this.value;
    });
    
    // Function to create grid
    function createGrid(size) {
        grid.innerHTML = ''; // Clear existing grid items
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.background = color;
                // Calculate coordinates
                let x = i % size;
                let y = Math.floor(i / size);
                coordinateElement.textContent = 'Coordinate: [' + x + ',' + y + ']';
            });
            grid.appendChild(gridItem);
        }
    }

    // Function to reset grid 
    function resetGrid() {
        gridSize = parseInt(document.getElementById('gridsize-dropdown').value); // Update grid size
        createGrid(gridSize);
    }

    clearButton.addEventListener('click', resetGrid);

    document.getElementById('gridsize-dropdown').addEventListener('change', resetGrid);

    // Initialize grid
    resetGrid(gridSize);
});

