const container = document.querySelector('.container');

// Create a 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
}


const squares = document.querySelectorAll('.square');


for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    
    square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = '#ffeb3b'; // Change color on hover
    });

    square.addEventListener('mouseleave', function(e) {
        e.target.style.backgroundColor = '#4caf50'; // revert to original
    });
}
