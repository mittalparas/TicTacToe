// console.log("Namaste Duniya");

const cellElements = document.querySelectorAll('[data-cell]')
const circleTurn;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once:true})
})

function handleClick(e) {
    // place mark
    // check for win
    // check for loose
    // switch turn

}