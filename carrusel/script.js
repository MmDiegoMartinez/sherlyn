const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider");

const images = [
    "img/01%2012%2023.jpg",
    "img/1700107882239_qkh1zk_2_0~2.jpg",
    "img/22%2012%2023%20(15).jpg",
    "img/28%2012%2023.jpg",
    "img/22%2012%2023%20(13).jpg",
    "img/22%2012%202322%2012%2023.jpg",
    "img/22%2012%2023%20(2).jpg",
    "img/22%2012%2023%20(20).jpg",
    "img/1%2012%2023%20(2).jpg",
    "img/10%2011%2023%20(12).jpg",
    "img/10%2011%2023%20(5).jpg",
    "img/10%2011%2023%20(2).jpg",
    "img/08%2012%2023%20(19).jpg",
    "img/08%2012%2023%20(16).jpg",
    "img/foto1.jpg",
    "img/1%2012%2023%20(7).jpg",
    "img/foto2.jpg",
    "img/08 12 23 (6).jpg",
    "img/08 12 23 (7).jpg",
    "img/10 07 24 (23).jpg",
    "img/10 07 24 (22).jpg",
    "img/15 06 2024 (1).jpg",
    "img/15 06 2024 (2).jpg",
    "img/15 06 2024 (3).jpg",
    "img/18 06 24.jpg",
    "img/19 05 24-7.jpg",
    "img/19 05 24-10.jpg",
    "img/19 05 24-11.jpg",
    "img/19 05 24-15.jpg",
    "img/19 05 24-16.jpg",
    "img/23 05 24.jpg",
    "img/25 06 24.jpg",
    "img/28 06 24.jpg",
    "img/28 12 23 (7).jpg",
    "img/29 05 24.jpg",
    "img/30 06 24 (4).jpg",
    "img/30 06 24 (6).jpg",
    "img/30 06 24 (26).jpg",
    "img/30 06 24 (37).jpg",
    "img/30 06 24 (41).jpg",
    "img/30 06 24 (42).jpg",
    "img/30 06 24 (43).jpg",
    "img/31 05 24-3 (1).jpg",
    "img/31 05 24-3g.jpg",
    "img/fot1.jpeg",
    "img/fot2.jpeg",
    "img/fot3.jpeg",
    "img/fot4.jpeg",
    "img/fot5.jpeg",
    "img/fot6.jpeg",

    "img/Snapchat-1100639008.jpg"
];

// Función para mezclar la matriz de imágenes.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mezclar la matriz de imágenes
shuffle(images);

// Crear dinámicamente secciones deslizantes
images.forEach(img => {
    const section = document.createElement("section");
    section.classList.add("slider-section");
    const image = document.createElement("img");
    image.src = img;
    section.appendChild(image);
    slider.appendChild(section);
});

const sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

setInterval(() => {
    moveToRight();
}, 4000);

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .9s";
}
