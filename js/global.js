// intéragir avec le dom ; méthode, propriété, évent

let header = document.querySelector('.header .container');

let grids = document.querySelectorAll('.grid');

grids.forEach(grid => {
    grid.classList.add('titi');
    console.log(grid);
})
// ceci permet d'ajouter une classe à toute nos grids

//  événements les + courants

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entièrement chargé et analysé");
})

header.addEventListener('click', () => {
    console.log('je click');
});

header.addEventListener('mouseenter', () => {
    console.log('je rentre');
});

//  insertion dom et nav dans 

let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone <span>`;
header.parentNode.append(div);