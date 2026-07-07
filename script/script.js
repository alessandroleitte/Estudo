const menu = document.querySelector(".menu-mobile");
const botaoMenu = document.querySelector(".botao-menu");
const botaoVoltar = document.getElementById("voltar");
const botaoWhatsapp = document.getElementById ("whatsapp");

const btnTodos = document.querySelector(".todos");
const btnReais = document.querySelector(".projetos-reais");
const btnEstudo = document.querySelector(".projetos-estudo");

const projetos = document.querySelectorAll(".projeto");

/* MENU MOBILE */
botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});


/* VOLTAR AO TOPO */

/* Mostrar / esconder botão */
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoVoltar.classList.add("show");
    botaoWhatsapp.classList.add("show");
  } else {
    botaoVoltar.classList.remove("show");
    botaoWhatsapp.classList.remove("show");
  }
});

/* Voltar ao topo */
botaoVoltar.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* FUNÇÃO DE FILTRO */
function filtrarProjetos(tipo) {
  projetos.forEach(projeto => {
    if (tipo === "todos") {
      projeto.style.display = "flex";
    } else {
      projeto.style.display = projeto.classList.contains(tipo)
        ? "flex"
        : "none";
    }
  });
}


projetos.forEach(projeto => {
  projeto.addEventListener("click", (evento) => {
    
    if (window.innerWidth >= 768) {
      return;
    }

    if (evento.target.tagName === 'A' || evento.target.closest('a')) {
      return; 
    }

    projeto.classList.toggle("aberto");
  });
});

/* EVENTOS DOS BOTÕES */
btnTodos.addEventListener("click", () => filtrarProjetos("todos"));
btnReais.addEventListener("click", () => filtrarProjetos("real"));
btnEstudo.addEventListener("click", () => filtrarProjetos("estudo"));
