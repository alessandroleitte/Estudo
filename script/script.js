menu = document.querySelector(".menu-mobile");
botaoMenu = document.querySelector(".botao-menu");

botaoMenu.addEventListener("click",() => {
	menu.classList.toggle("active");
});