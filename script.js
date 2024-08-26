const container = document.querySelector('.container');

// Function to create a grid
function createGrid(dimensions) {
    const squareSize = 16; 
    const containerSize = squareSize * dimensions; // Size of container

    // Update container size
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

        // Add event listener for hover effect
        square.addEventListener('mouseenter', function(e){
            e.target.style.backgroundColor = '#ffeb3b'; // Change color on hover
        });

        container.appendChild(square);
    }
}

// Create the initial 16x16 grid
createGrid(16);

const newBtn = document.querySelector('.green-button');

// Event listener for the button to create a new grid
newBtn.addEventListener('click', function(e){
    let dimensions = parseInt(prompt("Enter dimension of grid (>0 & <100)"));
    
    if (isNaN(dimensions) || dimensions <= 0 || dimensions > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    createGrid(dimensions);
});
