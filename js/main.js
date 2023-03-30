let body = document.querySelector(`body`);

let carouselslides = document.getElementsByClassName(`carousel-slides`)[0];

let navigation = document.getElementsByClassName(`carousel-navigation`);
navigation = navigation[0].children;

let ArrowL = navigation[0];
ArrowL.setAttribute(`id`, `arrow-Left`);

let ArrowR = navigation[1];
ArrowR.setAttribute(`id`, `arrow-Right`);

function slides(data) {

    let index = 0;
    const slideWidth = -660;

    for(let i = 0; i < data.slide.length;i++){

        let slideInstance = document.createElement(`div`);
        slideInstance.setAttribute(`id`, `slide`);

        let album = document.createElement(`p`);
        album.textContent = data.slide[i].album;
        album.setAttribute(`id`, `album`);

        let artist = document.createElement(`p`);
        artist.setAttribute(`id`, `artist`);
        artist.innerHTML = `<a href="${data.slide[i].url}">${data.slide[i].artist}</a>`;

        let picture = document.createElement(`img`);
        picture.setAttribute(`src`, data.slide[i].cover_image.path);
        picture.setAttribute(`id`, `pic`);
        picture.setAttribute(`alt`, data.slide[i].cover_image.alt_content);
        picture.setAttribute(`width`, data.slide[i].cover_image.width);
        picture.setAttribute(`hight`, data.slide[i].cover_image.height);

        let credit = document.createElement(`p`);
        credit.setAttribute(`id`, `credit`);
        credit.innerHTML = `Credit:<a href="${data.slide[i].cover_image.credit}
        ">${data.slide[i].cover_image.credit}</a>`;

        let discription = document.createElement(`p`);
        discription.textContent = data.slide[i].review.content;
        discription.setAttribute(`id`, `discription`);

        let author = document.createElement(`p`);
        author.setAttribute(`id`, `author`);
        author.innerHTML = `-<a href="${data.slide[i].review.url}">${data.slide[i].review.source}</a>`;
        slideInstance.appendChild(album);
        slideInstance.appendChild(artist);
        slideInstance.appendChild(picture);
        slideInstance.appendChild(credit);
        slideInstance.appendChild(discription);
        slideInstance.appendChild(author);
        carouselslides.appendChild(slideInstance);
    }

    ArrowR.addEventListener(`click`, () => {
        if(index > 0) {
            ArrowL.style.visibility = `visible`;
            index--;
            carouselslides.style.marginLeft = slideWidth * index + `px`;
            if(index === 0){
                ArrowR.style.visibility = `hidden`;
            }
        }
    });

    ArrowL.addEventListener(`click`, () => {
        if(index < carouselslides.children.length - 1) {
            ArrowR.style.visibility = `visible`;
            index++;
            carouselslides.style.marginLeft = slideWidth * index + `px`;
            if(index === carouselslides.children.length -1){
                ArrowL.style.visibility = `hidden`;
            }
        }
    });

    document.addEventListener(`keydown`, (k) => {
        if(k.code === `ArrowRight`){
            if(index > 0) {
                ArrowL.style.visibility = `visible`;
                index--;
                carouselslides.style.marginLeft = slideWidth * index + `px`;
                if(index === 0){
                    ArrowR.style.visibility = `hidden`;
                }
            }
        }
    });

    document.addEventListener(`keydown`, (k) => {
        if(k.code === `ArrowLeft`){
            if(index < carouselslides.children.length - 1) {
                ArrowR.style.visibility = `visible`;
                index++;
                carouselslides.style.marginLeft = slideWidth * index + `px`;
                if(index === carouselslides.children.length -1){
                    ArrowL.style.visibility = `hidden`;
                }
            }
        }
    });
}

let script = document.createElement(`script`);
script.setAttribute(`src`, `json/data.json`);
body.appendChild(script);
