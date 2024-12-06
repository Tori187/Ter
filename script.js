/*----------------- menu scripr start ---------------------------*/

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");

}
/* -------------------------menu script end------меню----*/