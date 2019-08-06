console.log ('hello world');
const hamburgerButton = document.querySelector (".hamburger")
console.log (hamburgerButton);

// let obsluga_klika = (dane) => {
//     console.log(dane)
// }

hamburgerButton.addEventListener('click', (dane) => {
const navigationList = document.querySelector ('.navigation_list')
navigationList.classList.toggle ('.navigation_list--visible')
} )