const container = document.querySelector('.container');

// Create a 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
}


const squares = document.querySelectorAll('.square');
const newBtn= document.querySelector('.green-button');


for (let i = 0; i < squares.length; i++){
    const square = squares[i];
    
    square.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = '#ffeb3b'; // Change color on hover
    });

   
}

newBtn.addEventListener('click', function(e){
    let dimensions = parseInt(prompt("Enter dimension of grid (< 100)"));
    
    if (isNaN(dimensions) || dimensions <= 0 || dimensions > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    
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
        container.appendChild(square);
    }
});