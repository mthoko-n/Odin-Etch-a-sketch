// Function to create a grid
function createGrid(dimensions) {
    const squareSize = 16;
    const containerSize = squareSize * dimensions;

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    // Remove existing squares
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Add new squares
    for (let i = 0; i < dimensions * dimensions; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = squareColorInput.value; // Set initial square color

        // Add event listeners for mouse and touch
        square.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = hoverColorInput.value; // Change color on hover
        });

        square.addEventListener('touchmove', function(e) {
            const touch = e.touches[0];
            const target = document.elementFromPoint(touch.clientX, touch.clientY);
            if (target && target.classList.contains('square')) {
                target.style.backgroundColor = hoverColorInput.value;
            }
        });

        container.appendChild(square);
    }
}

// Update the colors of the grid squares when the square color input changes
squareColorInput.addEventListener('input', function() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = squareColorInput.value;
    });
});

// Initial grid creation
createGrid(16);

// Button to create a new grid with custom dimensions
newBtn.addEventListener('click', function(e) {
    let dimensions = parseInt(prompt("Enter dimension of grid (>0 & <100)"));
    
    if (isNaN(dimensions) || dimensions <= 0 || dimensions > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    createGrid(dimensions);
});
