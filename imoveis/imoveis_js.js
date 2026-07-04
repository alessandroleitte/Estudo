// Banco de dados dinâmico dos imóveis (Adicione a descrição longa e os caminhos das imagens aqui)
const dadosImoveis = {
    conviver: {
        titulo: "Total Ville Conviver – Santa Maria",
        descricaoLonga: "O Total Ville Conviver traz para Santa Maria um conceito moderno de moradia bem planejada. Apartamentos de 2 e 3 quartos com excelente aproveitamento de espaço interno. O condomínio oferece uma área de lazer de clube totalmente equipada e decorada: piscinas adulto e infantil, churrasqueiras, salão de festas, playground e segurança monitorada 24h. Perfeito para quem quer usar os subsídios do Minha Casa Minha Vida e sair do aluguel com parcelas menores que a mensalidade atual.",
        imagens: [
            "imagens/conviver/logo-conviver.png",
            "imagens/conviver/foto1.jpg", 
            "imagens/conviver/foto2.jpg",
            "imagens/conviver/planta.jpg"
        ]
    },
    ikeda: {
        titulo: "Total Ville Ikeda – Ceilândia",
        descricaoLonga: "Localizado estrategicamente em Ceilândia, o Total Ville Ikeda é a escolha perfeita para quem busca acessibilidade e conforto no DF. O empreendimento conta com plantas inteligentes de 2 quartos, fino acabamento e infraestrutura de ponta. Sua área comum dispõe de academia ao ar livre, quadra poliesportiva, espaços gourmets e portaria blindada. Facilidade no financiamento direto com a Caixa Econômica Federal.",
        imagens: [
            "imagens/ikeda/LOGO_IKEDA.png",
            "imagens/ikeda/foto1.jpg",
            "imagens/ikeda/foto2.jpg"
        ]
    }
    // Adicione os outros IDs aqui conforme a necessidade seguindo a mesma estrutura (planaltina, garcas, etc.)
};

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-empreendimento");
    const cards = document.querySelectorAll(".produto");
    const closeBtn = document.querySelector(".close-modal");
    
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescricao = document.getElementById("modal-descricao-longa");
    const fotoExibicao = document.getElementById("foto-exibicao");
    const containerMiniaturas = document.getElementById("modal-miniaturas");
    const btnWpp = document.getElementById("modal-wpp-btn");

    // Abrir Modal ao clicar no card
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const idImovel = card.getAttribute("data-id");
            const dados = dadosImoveis[idImovel];

            if (dados) {
                // Atualiza Textos
                modalTitulo.innerText = dados.titulo;
                modalDescricao.innerText = dados.descricaoLonga;
                
                // Configura Link do Whatsapp customizado com o nome do imóvel
                btnWpp.href = `https://wa.me/5561993437587?text=Olá! Gostaria de mais informações e simulação sobre o ${encodeURIComponent(dados.titulo)}`;

                // Limpa e reconstrói a galeria
                containerMiniaturas.innerHTML = "";
                fotoExibicao.src = dados.imagens[0]; // primeira foto vira o destaque

                dados.imagens.forEach((imgUrl, index) => {
                    const imgMinatura = document.createElement("img");
                    imgMinatura.src = imgUrl;
                    imgMinatura.alt = `Foto ${index + 1}`;
                    if(index === 0) imgMinatura.classList.add("ativa");

                    // Evento para trocar a foto de exibição ao clicar na miniatura
                    imgMinatura.addEventListener("click", () => {
                        document.querySelector(".miniaturas img.ativa")?.classList.remove("ativa");
                        imgMinatura.classList.add("ativa");
                        fotoExibicao.src = imgUrl;
                    });

                    containerMiniaturas.appendChild(imgMinatura);
                });

                // Exibe a modal com efeito fluído
                modal.style.display = "block";
            }
        });
    });

    // Fechar Modal no 'X'
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar Modal ao clicar fora dela
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});