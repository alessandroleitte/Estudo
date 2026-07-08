// Banco de dados dinâmico dos imóveis (Adicione a descrição longa e os caminhos das imagens aqui)
const dadosImoveis = {
    conviver: {
        titulo: "Total Ville Conviver – Santa Maria",
        descricaoLonga: 
        `OTotal Ville Conviver foi desenvolvido para quem deseja conquistar o primeiro imóvel com segurança, conforto e excelente custo-benefício. Localizado em Santa Maria - DF, o empreendimento faz parte dos programas Minha Casa Minha Vida e Morar DF, permitindo condições facilitadas de financiamento para famílias com renda a partir de R$ 2.500,00.
        O condomínio conta com guarita 24 horas e uma área de lazer completa com piscinas, playground, salão de festas, churrasqueiras, quadra poliesportiva, quadra gramada e espaço pet, oferecendo qualidade de vida para toda a família.
        Disponível em plantas de 2 quartos, 2 quartos com suíte e 3 quartos com suíte, o Total Ville Conviver une conforto, segurança e excelente localização.
        Previsão de entrega
        Condomínio 1 – Novembro/2026
        Condomínio 2 – Outubro/2028
        `,
        imagens: [
            "imagens/conviver/logo-conviver.png",
            "imagens/conviver/entrada.jpg", 
            "imagens/conviver/piscina.jpg",
            "imagens/conviver/tip1.jpg",
            "imagens/conviver/tip2.jpg"
        ]
    },
    ikeda: {
        titulo: "Total Ville Ikeda – Ceilândia",
        descricaoLonga: `O Total Ville Ikeda oferece tudo o que sua família precisa para morar com conforto, segurança e praticidade em Ceilândia - DF.
        O empreendimento está enquadrado nos programas Minha Casa Minha Vida e Morar DF, atendendo famílias com renda a partir de R$ 2.500,00.
        São apartamentos de 2 quartos e 2 quartos com suíte, em condomínio fechado com guarita 24 horas e uma estrutura completa de lazer composta por piscinas, playground, salão de festas, churrasqueiras, quadra poliesportiva, quadra gramada e espaço pet.
        Previsão de entrega
        Condomínio 1 – Agosto/2026
        Condomínio 2 – Agosto/2027
        Condomínio 3 – Outubro/2028
        `,
        imagens: [
            "imagens/ikeda/LOGO_IKEDA.png",
            "imagens/ikeda/geral.jpg",
            "imagens/ikeda/piscina.jpg",
            "imagens/ikeda/tip1.jpg",
            "imagens/ikeda/tip2.jpg"
        ]
    },
    planaltina: {
        titulo: "Total Ville – Planaltina",
        descricaoLonga: `Chegou a oportunidade de conquistar seu apartamento próprio em Planaltina - DF.
        O Total Ville Planaltina oferece apartamentos de 2 quartos e 2 quartos com suíte, em condomínio fechado com guarita 24 horas e uma infraestrutura completa para toda a família.
        O lazer inclui piscinas, playground, salão de festas, churrasqueiras, quadra poliesportiva, quadra gramada e espaço pet.
        O empreendimento participa dos programas Minha Casa Minha Vida e Morar DF, atendendo famílias com renda a partir de R$ 2.500,00.
        Previsão de entrega
        Condomínio 2 – Janeiro/2027
        Condomínio 12 – Agosto/2028
        Condomínio 16 – Fevereiro/2027 `,
        imagens: [
            "imagens/planaltina/logo.png",
            "imagens/planaltina/entrada.jpg",
            "imagens/planaltina/piscina.jpg",
            "imagens/planaltina/predio.jpg",
            "imagens/planaltina/geral.jpg"
        ]
    },
    garcas: {
        titulo: "Recanto das Garças – Recanto das Emas",
        descricaoLonga: `O Recanto das Garças é ideal para famílias que procuram mais espaço e qualidade de vida.
        Localizado no Recanto das Emas - DF, o empreendimento oferece apartamentos de 3 quartos com suíte, em condomínio fechado com guarita 24 horas, playground, áreas de convivência e churrasqueiras.
        Enquadrado nos programas Minha Casa Minha Vida e Morar DF, atende famílias com renda a partir de R$ 4.500,00.
        Previsão de entrega
        Fevereiro/2027`,
        imagens: [
            "imagens/garcas/LOGO.png",
            "imagens/garcas/CONDOMINIO.jpg",
            "imagens/garcas/FACHADA.jpg",
            "imagens/garcas/GERAL.jpg",
            "imagens/garcas/GUARITA.jpg"
        ]
    },
    aguias: {
        titulo: "Recanto das Águias – Recanto das Emas",
        descricaoLonga: `Recanto das Águias
        Pensado para quem deseja sair do aluguel, o Recanto das Águias oferece apartamentos de 1 quarto em um condomínio moderno localizado no Recanto das Emas - DF.
        O condomínio possui guarita 24 horas, piscinas, playground, salão de festas, churrasqueiras e diversas opções de lazer para o dia a dia.
        O empreendimento faz parte dos programas Minha Casa Minha Vida e Morar DF, para famílias com renda a partir de R$ 2.000,00.
        Previsão de entrega
        Setembro/2027
        `,
        imagens: [
            "imagens/aguias/LOGO_RECANTO_AGUIAS.png",
            "imagens/aguias/FACHADA.jpg",
            "imagens/aguias/PISCINA.jpg",
            "imagens/aguias/FRENTE.jpg"
        ]
    },
    alvorada: {
        titulo: "Alto da Alvorada – Sobradinho",
        descricaoLonga: `O Alto da Alvorada reúne arquitetura contemporânea, acabamento refinado e uma estrutura completa para proporcionar uma experiência única de morar.
        Localizado em Sobradinho - DF, oferece apartamentos de 2 e 3 quartos com suíte, em um condomínio de alto padrão com:
        Academia
        Brinquedoteca
        Salão de jogos
        Lavanderia compartilhada
        Minimercado
        Piscinas
        Salão de festas
        Espaços gourmet
        Diversas áreas de lazer
        Um empreendimento desenvolvido para quem busca conforto, exclusividade e valorização patrimonial.
        Previsão de entrega
        Março/2027
                `,
        imagens: [
            "imagens/alvorada/LOGO_ALVORADA-removebg-preview.png",
            "imagens/alvorada/FACHADA.jpg",
            "imagens/alvorada/GERAL.jpg",
            "imagens/alvorada/GUARITA.jpg",
            "imagens/alvorada/PISCINA.jpg"
        ]
    },
    aurora: {
        titulo: "Alto da Aurora – Sobradinho",
        descricaoLonga: `O Alto da Aurora foi planejado para oferecer sofisticação em cada detalhe.
        São apartamentos de 2 e 3 quartos com suíte, em um condomínio moderno localizado em Sobradinho - DF, com estrutura completa incluindo academia, brinquedoteca, salão de jogos, piscinas e diversos ambientes de lazer.
        Ideal para quem procura conforto, segurança e excelente potencial de valorização.
        Previsão de entrega
        Fevereiro/2029 `,
        imagens: [
            "imagens/aurora/LOGO.png",
            "imagens/aurora/GERAL.jpg",
            "imagens/aurora/GUARITA.jpg",
             "imagens/aurora/PISCINA.jpg",
              "imagens/aurora/FACHADA.jpg"
        ]
    },
    lumi: {
        titulo: "Lumi Tower Residences – Águas Claras",
        descricaoLonga:`O Lumi Tower Residences representa um novo conceito de morar em Águas Claras - DF.
        Com apartamentos de 2 e 3 quartos com suíte, o empreendimento oferece arquitetura moderna, acabamento premium e uma área de lazer completa com academia, brinquedoteca, salão de jogos, piscinas, espaços gourmet e ambientes exclusivos para toda a família.
        Ideal para quem deseja morar com conforto, elegância e praticidade em uma das regiões mais valorizadas do Distrito Federal.
        Previsão de entrega
        Janeiro/2027`
        ,
        imagens: [
            "imagens/lumi/logo-lumi.png",
            "imagens/lumi/entrada.jpg",
            "imagens/lumi/fachada.jpg",
            "imagens/lumi/piscina.jpg"
        ]
    },
    reserva: {
        titulo: "Reserva do Parque Clube – Águas Claras",
        descricaoLonga:`O Reserva do Parque Clube oferece uma experiência única de morar em Águas Claras - DF.
        São apartamentos de 2 e 3 quartos com suíte, cercados por uma infraestrutura de lazer comparável aos melhores resorts.
        O condomínio conta com piscinas adulto e infantil, piscina com raia, spas, sauna, academia coberta e descoberta, quadra poliesportiva, miniquadra, playgrounds, pet place, espaço pet coberto, espaços gourmet, churrasqueiras, salões de festa, cinema, home office, coworking, sala de reuniões, salão de jogos adulto, jogos teen, brinquedoteca, bicicletários, sala de yoga, deck de meditação, oficina de bricolagem, espaço stadium e diversos ambientes planejados para proporcionar conforto, lazer e bem-estar.
        Previsão de entrega
        Outubro/2027`
        ,
        imagens: [
            "imagens/reserva/LOGO.png",
            "imagens/reserva/ACADEMIA.jpg",
            "imagens/reserva/FACHADA.jpg",
            "imagens/reserva/GUARITA.jpg",
            "imagens/reserva/PISCINA.jpg"
        ]
    },
    singulare: {
        titulo: "Singulare Home Riva – Samambaia",
        descricaoLonga:`O Singulare Home Riva foi criado para quem deseja viver com mais qualidade e estilo.
        Localizado em Samambaia - DF, oferece apartamentos de 2 quartos com suíte e varanda, com plantas inteligentes, excelente acabamento e um condomínio completo com piscinas, academia, salão de festas, brinquedoteca, salão de jogos, churrasqueiras e diversos espaços de convivência.
        Cada detalhe foi pensado para proporcionar uma experiência diferenciada de morar, aliando conforto, sofisticação e excelente valorização do investimento.
        `,
        imagens: [
            "imagens/singulare/logo-singulare.png",
            "imagens/singulare/area_lazer.webp",
            "imagens/singulare/entrada.webp",
            "imagens/singulare/fachada.webp",
            "imagens/singulare/esp_gurmet.webp",
            "imagens/singulare/piscina.webp"
        ]
    }
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

    // Variáveis de controle para o swipe mobile
    let touchStartX = 0;
    let touchEndX = 0;

    // Função para mudar a imagem da galeria
    function mudarFoto(index) {
        const imagens = dadosImoveis[modal.dataset.idAtual]?.imagens;
        if (!imagens || index < 0 || index >= imagens.length) return;

        fotoExibicao.src = imagens[index];
        
        // Atualiza a classe ativa nas miniaturas
        const miniaturas = containerMiniaturas.querySelectorAll("img");
        miniaturas.forEach(m => m.classList.remove("ativa"));
        miniaturas[index].classList.add("ativa");
    }

    // --- TECLADO ---
    document.addEventListener("keydown", (e) => {
        if (modal.style.display !== "block") return;
        
        const miniaturas = containerMiniaturas.querySelectorAll("img");
        let indexAtual = Array.from(miniaturas).findIndex(m => m.classList.contains("ativa"));

        if (e.key === "ArrowRight") {
            mudarFoto((indexAtual + 1) % miniaturas.length);
        } else if (e.key === "ArrowLeft") {
            mudarFoto((indexAtual - 1 + miniaturas.length) % miniaturas.length);
        } else if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });

    // --- SWIPE MOBILE ---
    fotoExibicao.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    fotoExibicao.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        const miniaturas = containerMiniaturas.querySelectorAll("img");
        let indexAtual = Array.from(miniaturas).findIndex(m => m.classList.contains("ativa"));
        const swipeThreshold = 50; // Distância mínima para considerar swipe

        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe para esquerda (Próxima)
            mudarFoto((indexAtual + 1) % miniaturas.length);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe para direita (Anterior)
            mudarFoto((indexAtual - 1 + miniaturas.length) % miniaturas.length);
        }
    }

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const idImovel = card.getAttribute("data-id");
            const dados = dadosImoveis[idImovel];

            if (dados) {
                modalTitulo.innerText = dados.titulo;
                modalDescricao.innerText = dados.descricaoLonga;
                btnWpp.href = `https://wa.me/5561993437587?text=Olá! Gostaria de informações sobre ${encodeURIComponent(dados.titulo)}`;

                containerMiniaturas.innerHTML = "";
                fotoExibicao.src = dados.imagens[0];

                dados.imagens.forEach((imgUrl, index) => {
                    const imgMiniatura = document.createElement("img");
                    imgMiniatura.src = imgUrl;
                    if(index === 0) imgMiniatura.classList.add("ativa");

                    imgMiniatura.addEventListener("click", () => {
                        document.querySelector(".miniaturas img.ativa")?.classList.remove("ativa");
                        imgMiniatura.classList.add("ativa");
                        fotoExibicao.src = imgUrl;
                    });

                    containerMiniaturas.appendChild(imgMiniatura);
                });

                modal.style.display = "block";
                modal.dataset.idAtual = idImovel;
            }
        });
    });

    closeBtn.addEventListener("click", () => modal.style.display = "none");
    
    window.addEventListener("click", (event) => {
        if (event.target === modal) modal.style.display = "none";
    });
});


//Formulário

 const form = document.getElementById('meuFormulario');
    const resultado = document.getElementById('mensagem-formulario');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão

        // Preparar os dados
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        // Mostrar "Enviando..." (opcional)
        form.querySelector('button[type="submit"]').textContent = "Enviando...";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // Sucesso: Oculta o formulário e mostra a mensagem
                form.style.display = 'none';
                resultado.style.display = 'block';
            } else {
                alert(json.message);
                form.querySelector('button[type="submit"]').textContent = "Enviar";
            }
        })
        .catch(error => {
            alert("Erro de conexão!");
            form.querySelector('button[type="submit"]').textContent = "Enviar";
        });
    });

    const parcelaModal = document.getElementById("parcelaModal");

document
.getElementById("simulador")
.addEventListener("click",function(e){

    e.preventDefault();

    parcelaModal.style.display="block";

});

document
.querySelector(".parcela-fechar")
.addEventListener("click",function(){

    parcelaModal.style.display="none";

});

window.addEventListener("click",function(e){

    if(e.target===parcelaModal){

        parcelaModal.style.display="none";

    }

});

document
.getElementById("parcelaBtnCalcular")
.addEventListener("click",calcularParcela);

function calcularParcela(){

    const renda = parseFloat(document.getElementById("parcelaRenda").value);

    if(isNaN(renda) || renda<=0){

        alert("Informe uma renda válida.");

        return;

    }

    const parcela = renda * 0.30;

    document.getElementById("parcelaResultado").innerHTML=`

        <h3 style="color:var(--fundo); text-align: center; font-size: 1.5em;">
            ${parcela.toLocaleString('pt-BR',{
                style:'currency',
                currency:'BRL'
            })}
        </h3>

        <p>
            Com base nos critérios gerais utilizados nos financiamentos da Caixa, sua parcela máxima estimada é de aproximadamente:
            <strong>${parcela.toLocaleString('pt-BR',{
                style:'currency',
                currency:'BRL'
            })}</strong>.
        </p>

        <small>
            Este cálculo é apenas uma estimativa e não representa uma aprovação de crédito.
        </small>

        <br><br>

        <a class="btn-whatsapp"
        target="_blank"
        href="https://wa.me/5561993437587?text=Olá! Minha renda é de R$ ${renda.toLocaleString('pt-BR')} e fiz a simulação no seu site. Gostaria de saber quais imóveis se encaixam no meu perfil.">
            
        📲 Fazer uma simulação completa
        
        </a>
    `;

}