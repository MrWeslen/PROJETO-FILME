let num_cards_GLOBAL = 5;

 let cards = [
    {
        background:
            "https://cloud.estacaonerd.com/wp-content/uploads/2019/02/09145633/alita-capa.jpg",
        display_background:
            "https://cdn.ome.lt/5kiT3YgMGvcuy2DdlXm_DYxRApM=/987x0/smart/uploads/conteudo/fotos/alita-2_2Qwc4Am.jpg",
        title: "Alita - Anjo de combate",
        description:
            "Abandonada em um ferro-velho de Iron City, a ciborgue Alita é encontrada pelo cientista Dyson Ido. Revitalizada, ela acorda sem memória e reconhecimento do mundo em que se encontra. Determinada a conhecer seu passado e explorar suas habilidades surpreendentes de luta, Alita se torna uma poderosa caçadora de recompensas, combatendo forças mortais.",
        Source: ""
        },
    {
        background: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMx77vEKeER_bY0SBbiN8PHMjcOonVWB3PF8EZswvRb_CmQikUF_dae1D_oQ1QAqB3TC7WP4jhqtbrkXZCiiehHxvE-OMnUffQ1BDIx900nUMnfT-VmcwbqO42afMasgVFFAt1a9I1mv_0rJaOeWWAfuj21jYV56Fi7X_zgxUnq9oPNk19BXfMFA8X/s2240/3875B9CF-45BB-4564-8364-BD891B924CF3.png",
        display_background:
            "https://blognroll.com.br/wp-content/uploads/2023/01/Gato-de-Botas-2.jpeg",
        title: "Gato de botas 2",
        description:
            "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele já gastou oito de suas nove vidas. Ele então parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas",
            Source: "https://drive.google.com/file/d/1aoOO0Pm295YHWyAx4ltHNfZhU4NpV4WN/view"
    },
    {
        background:
            "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2023/03/Tudo-em-Todo-o-Lugar-ao-Mesmo-Tempo.webp?resize=1024%2C576&ssl=1",
        display_background:
            "https://sampi.net.br/dir-arquivo-imagem/2023/03/1518d4aaaa7317c66b356f7ae1a94f5c.jpg",
        title: "Tudo em Todo o Lugar ao Mesmo Tempo",
        description:
            "Uma ruptura interdimensional bagunça a realidade e uma inesperada heroína precisa usar seus novos poderes para lutar contra os perigos bizarros do multiverso.",
        Source: "https://drive.google.com/file/d/1cF6D5o39Bpu-iyXMdni9R0SNmKKlRr_3/view"
    },
    {
        background:
            "https://gkpb.com.br/wp-content/uploads/2022/10/adao-negro-scaled-e1665680179489.jpg",
        display_background:
            "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/869/tudo-sobre-adao-negro-capa.jpg",
        title: "Adão Negro",
        description:
            "O poderoso Adão Negro é libertado de sua tumba para lançar sua justiça cruel sobre a Terra.",
            Source: "https://drive.google.com/file/d/1UJWqeJpu-QV0IXLLdAabW9N5kzC9Wkj5/view"
    },
    {
        background:
            "https://s2.glbimg.com/XioSuIFV333aIri7OG_53dZlUAc=/0x0:1200x800/984x0/smart/filters:strip_icc/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/J/5/u2iKfXRAKjYMOzbEGaDg/53.png",
        title: "Pantera Negra",
        description:
            "Rainha Ramonda, Shuri, M'Baku, Okoye e Dora Milaje lutam para proteger sua nação das potências mundiais intervenientes após a morte do rei T'Challa.",
            Source: "https://drive.google.com/file/d/11TqUgoWVMpjX1eC8MCXJv-EDDrV0Xr0P/view"
    },
    {
        background:
            "https://conteudo.imguol.com.br/c/entretenimento/d6/2022/09/29/a-queda-mistura-emocao-e-adrenalina-1664457890688_v2_900x506.jpg.webp",
        title: "A QUEDA",
        description:
            "Para as melhores amigas Becky e Hunter, a vida é sobre vencer medos e ultrapassar limites. No entanto, depois de subir 600 metros até o topo de uma torre de rádio remota e abandonada, elas acabam presas lá em cima. Agora, suas habilidades de escalada são colocadas à prova enquanto lutam desesperadamente para sobreviver aos elementos, a falta de suprimentos e a altura vertiginosa.",
            Source: "https://drive.google.com/file/d/1-OysYAWp1gbq-k3Ny8xxk1VFbqaqrsPc/view"
    },
    {
        background:
            "https://www.portaldecamaqua.com.br/images/noticia/img_54353_foto_1_g.jpg",
        title: "A mulher rei",
        description:
            "Em 1800, o general Nanisca treina um grupo de mulheres guerreiras para proteger o reino africano de Dahomey de um inimigo estrangeiro.",
            Source: "https://drive.google.com/file/d/1V6nTnNTr289KgExRF7J2QF-jHv1fRZT0/view"
    },
    {
        background:
            "https://poltronanerd.com.br/wp-content/uploads/2022/06/Hustle-Adam-Sandler-netflix.jpg",
        title: "Arremessando alto",
        description:
            "Um olheiro de basquete azarado encontra um jogador com um grande potencial e se esforça para mostrar ao mundo que os dois merecem chegar à NBA.",
            Source: ""
     },
    {
        background:
            "https://1.bp.blogspot.com/-gfhnWU3rr7I/YA8iTkni8eI/AAAAAAAAMMA/lLjkqCBwvVwgpkUMwBb4TkZxXE-I3hH6wCLcBGAsYHQ/s1000/irm%25C3%25A3o%2Burso.png",
        title: "Irmão Urso",
        description:
            "Kenai é um bravo jovem índio com uma aversão especial por ursos. Quando seu irmão Sitka é morto por um, Kenai mata o urso, mas é magicamente transformado em um deles. Para piorar a situação, seu outro irmão, Denahi, jura matar o urso que Kenai se tornou. A única esperança de Kenai é uma montanha mágica, onde ele acredita que pode ser transformado de volta em um ser humano e ele pede a Koda, um verdadeiro filhote de urso, para ajudá-lo a chegar lá.",
            Source: "https://drive.google.com/file/d/1-CyVeij_MVLHELJKr9BmoBV4iSaq6WBO/view?usp=share_link"
     },
    {
        background:
            "https://imagoi.com/wp-content/uploads/2021/05/irmao-urso-2-capa-imagoi.jpg",
        title: "Irmão urso 2",
        description:
            "Um urso grande chamado Kenai estava hibernando e, quando acorda faminto, sai para comer amoras com seu irmão menor Koda Kenai encontra sua antiga amiga de infância Nita, que tem um problema para resolver. Nita deseja se casar, mas primeiro tem que queimar o amuleto que ganhou de Kenai nas Cataratas Hokani acompanhada por ele.",
            Source: "https://drive.google.com/file/d/1-ABZjBgq_3ZYEPKicbVXuiT9AgHkgAXg/view?usp=share_link"
     },
    {
        background:
            "http://4.bp.blogspot.com/_f8CI4dol58s/Ripvx8TwUMI/AAAAAAAAAQg/l1w1rSIIWHQ/s1600/Clube+da+Luta+Sab%C3%83%C2%A3o.jpg",
        title: "Clube da luta",
        description:
        "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.",
        Source: "https://drive.google.com/file/d/1kzvmHQo6ayIxYypYCJMiaLH_NiajROSZ/view"
    }
];


const IsMobile = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 736) {
        return true;
    } else {
        return false;
    }
};

const CheckSizeAttributes = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    let carousels = document.getElementsByClassName("card-carousel");

    let old_num_cards = num_cards_GLOBAL;
    let new_num_cards;

    if (width > 1501) {
        new_num_cards = 5;
    } else if (width <= 1500 && width > 1100) {
        new_num_cards = 4;
    } else if (width <= 1100 && width > 520) {
        new_num_cards = 3;
    } else if (width <= 520) {
        new_num_cards = 2;
    }

    for (let i = 0; i < carousels.length; i++) {
        if (carousels[i].children.length > 2) {
            for (let j = 1; j < carousels[i].children.length - 1; j++) {
                carousels[i].children[j].style.display = "none";
            }
            for (let j = 1; j < new_num_cards + 1; j++) {
                carousels[i].children[j].style.display = "flex";
            }
        }
    }

    num_cards_GLOBAL = new_num_cards;
};

const ResizeHeader = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 815) {
        if (document.getElementsByClassName("hamburger").length <= 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("main-nav")[0];
            let right_nav = header.getElementsByClassName("right-nav")[0];

            let hamburger = document.createElement("div");
            hamburger.classList.add("hamburger");
            hamburger.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`;
            main_nav.remove();
            right_nav.remove();

            let bottom_header = document.createElement("div");
            bottom_header.classList.add("header-bottom");
            bottom_header.append(main_nav, right_nav);
            bottom_header.style.display = "none";

            hamburger.addEventListener("click", function () {
                if (bottom_header.style.display == "none") {
                    bottom_header.style.display = "flex";
                    header.style.paddingBottom = "9px";
                    header.style.paddingTop = "9px";
                } else {
                    bottom_header.style.display = "none";
                    header.style.paddingBottom = "0px";
                    header.style.paddingTop = "0px";
                }
            });

            header.classList.add("header-change");

            let top_header = document.createElement("div");
            top_header.classList.add("header-top");
            top_header.append(header.children[0], hamburger);

            header.innerHTML = "";
            header.append(top_header, bottom_header);
        }
    } else {
        if (document.getElementsByClassName("hamburger").length > 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("main-nav")[0];
            let right_nav = header.getElementsByClassName("right-nav")[0];
            let brand = header.getElementsByClassName("brand")[0];

            header.classList.remove("header-change");
            header.children[0].remove();
            header.children[0].remove();
            header.append(brand, main_nav, right_nav);
        }
    }
};

const AddCards = () => {
    let carousel_width = document.getElementsByClassName("card-carousel")[0]
        .clientWidth;

    let btn_width =
        document.getElementsByClassName("carousel-btn")[0].clientWidth +
        document.getElementsByClassName("carousel-btn")[1].clientWidth;

    let num_cards = num_cards_GLOBAL;
    let card_margin = 2;
    let initial_width = 1920;
    let initial_height = 1080;

    let scale =
        (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
        initial_width;

    let content_titles = document.getElementsByClassName("content-title");

    for (let i = 0; i < content_titles.length; i++) {
        content_titles[i].style.marginLeft = `${card_margin}px`;
    }

    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let not_chosen = [];

        for (let c = 0; c < cards.length; c++) {
            not_chosen.push(c);
        }

        for (let j = 0; j < cards.length; j++) {
            let chosen_index = Math.floor(Math.random() * not_chosen.length);

            let chosen_card = cards[not_chosen[chosen_index]];

            not_chosen.splice(chosen_index, 1);

            let card = document.createElement("div");
            card.classList.add("card");
            card.style.backgroundImage = `url(${chosen_card.background})`;

            //se imagem não carregar
            card.style.backgroundColor = `#333`;

            card.style.width = initial_width * (scale / 100) + "px";
            card.style.height = initial_height * (scale / 100) + "px";
            card.style.margin = `0px ${card_margin}px`;
            card.style.minWidth = initial_width * (scale / 100) + "px";
            card.style.minHeight = initial_height * (scale / 100) + "px";

            let overlay = document.createElement("div");
            overlay.classList.add("overlay");

            let title = document.createElement("h4");
            title.innerText = chosen_card.title;
            let description = document.createElement("p");
            description.innerText = "1h 25m";

            let button_container = document.createElement("div");
            button_container.classList.add("button-container");

            let button1 = document.createElement("div");
            button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>`;
            button1.classList.add("watch");
            button1.addEventListener("click", function () {
                console.log("filme ", chosen_card.Source )
                 watchNow(`${chosen_card.Source}`) 
            });

            
           
            let button2 = document.createElement("div");
            button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>`;
            button2.classList.add("queue");

            button2.addEventListener("click", function () {
                ToggleWatchLater(`${chosen_card.title}`);
            });

            let button3 = document.createElement("div");
            button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;
            button3.classList.add("star");
            button3.classList.add("queue");

            button3.addEventListener("click", function () {
                if (button3.children[0].style.color != "rgb(255, 255, 87)") {
                    button3.children[0].style.color = "rgb(255, 255, 87)";
                } else {
                    button3.children[0].style.color = "white";
                }
            });

            let button4 = document.createElement("div");
            button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`;
            button4.classList.add("star");
            button4.classList.add("queue");

            button4.addEventListener("click", function () {
                if (document.getElementsByClassName("movie-desc").length > 0) {
                    // If the modal exists
                    document.getElementsByClassName("movie-desc")[0].remove();
                } else {
                    let modal = document.createElement("div");
                    modal.classList.add("movie-desc");

                    let modal_content = document.createElement("div");
                    modal_content.classList.add("modal-content");

                    let bg_image = document.createElement("div");
                    bg_image.classList.add("desc-image");
                    bg_image.style.backgroundImage = `url(${chosen_card.background})`;
                    let image_cover = document.createElement("div");

                    let close_btn = document.createElement("div");
                    close_btn.classList.add("close-btn");
                    close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;

                    close_btn.addEventListener("click", function () {
                        this.parentElement.parentElement.parentElement.parentElement.remove();
                    });

                    image_cover.append(close_btn);
                    bg_image.append(image_cover);

                    let top_info = document.createElement("div");
                    top_info.classList.add("desc-top");
                    let title = document.createElement("h1");
                    title.innerText = chosen_card.title;

                    let btn_selection = document.createElement("div");
                    btn_selection.classList.add("button-selection");
                    btn_selection.innerHTML = `
                        <div class="watch">
                            <h3>Assistir</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                        </div>
                        <div class="queue" onclick="ToggleWatchLater('${chosen_card.title}');">
                            <h3>Assistir depois</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>`;

                    top_info.append(title, btn_selection);

                    let mid_info = document.createElement("div");
                    mid_info.classList.add("desc-mid");
                    mid_info.innerHTML = `<p>${chosen_card.description}</p>`;

                    let bottom_info = document.createElement("div");
                    bottom_info.classList.add("desc-bottom");

                  

                    modal_content.append(
                        bg_image,
                        top_info,
                        mid_info,
                        bottom_info
                    );
                    modal.append(modal_content);

                    document.body.append(modal);

                    document.body.addEventListener("click", function (event) {
                        if (!event.target.classList.contains("modal-content")) {
                            //modal.remove();
                            console.log(1);
                        }
                    });

                    // Definir a altura da imagem modal
                    let total_width = document.getElementsByClassName(
                        "modal-content"
                    )[0].clientWidth;
                    let large_scale = (100 * total_width) / 1920;
                    document.getElementsByClassName(
                        "desc-image"
                    )[0].style.height = `${1080 * (large_scale / 100)}px`;

                 
                }
            });

            button_container.append(button1, button2, button3, button4);

            overlay.append(title, description, button_container);
            card.append(overlay);
            if (j < num_cards) {
                carousels[i].insertBefore(
                    card,
                    carousels[i].children[carousels[i].children.length - 1]
                );
            } else {
                card.style.display = "none";
                carousels[i].insertBefore(
                    card,
                    carousels[i].children[carousels[i].children.length - 1]
                );
            }
        }
    }
};

const CheckCards = () => {
    let carousels = document.getElementsByClassName("card-carousel");

    for (let i = 0; i < carousels.length; i++) {
        let carousel_width = carousels[i].clientWidth;

        let btn_width =
            carousels[i].getElementsByClassName("carousel-btn")[0].clientWidth +
            carousels[i].getElementsByClassName("carousel-btn")[1].clientWidth;

        let num_cards = num_cards_GLOBAL;
        let card_margin = 2;
        let initial_width = 1920;
        let initial_height = 1080;

        let scale =
            (100 *
                ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
            initial_width;

        let cards = carousels[i].getElementsByClassName("card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.width = initial_width * (scale / 100) + "px";
            cards[i].style.height = initial_height * (scale / 100) + "px";
            cards[i].style.margin = `0px ${card_margin}px`;
            cards[i].style.minWidth = initial_width * (scale / 100) + "px";
            cards[i].style.minHeight = initial_height * (scale / 100) + "px";
        }

        if (IsMobile()) {
            carousels[i].style.height =
                1.6 * (initial_height * (scale / 100)) + "px";
        } else {
            carousels[i].style.height = "auto";
        }
    }
};

const AddCarouselButtons = () => {
    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let btn1 = document.createElement("div");
        btn1.classList.add("carousel-btn");
        btn1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Previous(this);">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>`;

        let btn2 = document.createElement("div");
        btn2.classList.add("carousel-btn");

        btn2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Next(this);">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>`;

        carousels[i].append(btn1, btn2);
    }
};

const ScrollFunction = () => {
    let header = document.getElementsByClassName("header")[0];
    if (document.documentElement.scrollTop > 1) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
};

const MakeJumbotron = () => {
    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;

    document.getElementsByClassName("top")[0].style.height = `${height}px`;
};

let slide_index = 0;

const AutoSlideShow = () => {
    let slide_area = document.getElementsByClassName("top")[0];
    let container = slide_area.children[0];

    container.classList.add("fadeIn");

    let bg_display = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].display_background) {
            bg_display.push(i);
        }
    }

    slide_index++;
    if (slide_index > bg_display.length - 1) {
        slide_index = 0;
    }

    slide_area.style.backgroundImage = `url("${
        cards[bg_display[slide_index]].display_background
    }")`;
    slide_area.getElementsByTagName("h1")[0].innerHTML =
        cards[bg_display[slide_index]].title;
    slide_area.getElementsByTagName("p")[0].innerHTML =
        cards[bg_display[slide_index]].description;

    container.classList.add("fadeOut");
    setTimeout(AutoSlideShow, 2000);
};

const SmoothScroll = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
};

const Next = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let first_elem = carousel.children[1];
    let next_elem;

    for (let i = 0; i < carousel.children.length; i++) {
        if (carousel.children[i].style.display == "none") {
            next_elem = carousel.children[i];
            break;
        }
    }

    first_elem.style.display = "none";
    first_elem.remove();
    carousel.insertBefore(
        first_elem,
        carousel.children[carousel.children.length - 1]
    );

    next_elem.style.display = "flex";
};

const Previous = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let last_display_item;
    let prev_elem = carousel.children[carousel.children.length - 2];

    for (let i = 0; i < carousel.children.length; i++) {
        if (
            carousel.children[i].style.display != "none" &&
            !carousel.children[i].classList.contains("carousel-btn")
        ) {
            last_display_item = carousel.children[i];
        }
    }

    last_display_item.style.display = "none";

    carousel.insertBefore(prev_elem, carousel.children[1]);

    prev_elem.style.display = "flex";
};

const ToggleWatchLater = (movie = "", activate = true) => {
    let modal = document.getElementsByClassName("watch-later-modal")[0];

    if (movie != "") {
        modal.getElementsByClassName("movie")[0].innerText = movie;
    }

    if (activate) {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
};


/** TESTEEEE */

function watchNow (movies){
    window.location.href = movies
};