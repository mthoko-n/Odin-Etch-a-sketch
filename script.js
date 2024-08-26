const container = document.querySelector('.container');
const newBtn = document.querySelector('.green-button');
const squareColorInput = document.getElementById('square-color');
const hoverColorInput = document.getElementById('hover-color');
let isDrawing = false; // Flag to track if drawing mode is active

// Function to create a grid
function createGrid(dimensions){
    const squareSize = 16;
    const containerSize = squareSize * dimensions;
    
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    // Remove existing squares
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    // Add new squares
    for (let i = 0; i < dimensions * dimensions; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = squareColorInput.value; // Set initial square color

        square.addEventListener('mouseenter', function(e) {
            if (isDrawing) {
                e.target.style.backgroundColor = hoverColorInput.value; // Change color on hover
            }
        });

        container.appendChild(square);
    }
}

// Update the colors of the grid squares when the square color input changes
squareColorInput.addEventListener('input', function(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = squareColorInput.value;
    });
});

// Toggle drawing mode on double-click
container.addEventListener('dblclick', function(e){
    isDrawing = !isDrawing;
});

// Stop drawing on mouse release
container.addEventListener('mouseup', function(e){
    isDrawing = false;
});

// Initial grid creation
createGrid(16);

// Button to create a new grid with custom dimensions
newBtn.addEventListener('click', function(e){
    let dimensions = parseInt(prompt("Enter dimension of grid (>0 & <100)"));
    
    if (isNaN(dimensions) || dimensions <= 0 || dimensions > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    createGrid(dimensions);
});
