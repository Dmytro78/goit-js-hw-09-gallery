import images from "./gallery-items.js";
import { scrolling } from './carousel-gallery.js';
// import { scrolling, closeModalOverlay, closeEsc } from './carousel-gallery.js';


const galleryBox = document.querySelector(".js-gallery");
const overlayBox = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".js-lightbox");
const lightBoxImg = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector(`[data-action="close-lightbox"]`);

const imgMarkup = createGallery(images);

const boxImg = (src, alt) => {
  lightBoxImg.src = src;
  lightBoxImg.alt = alt; 
}

galleryBox.insertAdjacentHTML("beforeend", imgMarkup);

galleryBox.addEventListener("click", isOpenModal);
closeBtn.addEventListener("click", isCloseModal);


// gallery

function createGallery(images) {
  return images.map(({ preview, original, description }) => {
    return `
    <li class ="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </li>
    `
  }).join("");
}

open

function isOpenModal(e) {
  const galleryEl = e.target;
  e.preventDefault();
  if (galleryEl.nodeName !== "IMG") {
    return;
  }

  boxImg(galleryEl.dataset.source, galleryEl.alt);
  // lightBoxImg.src = galleryEl.dataset.source;
  // lightBoxImg.alt = galleryEl.alt;
 
  lightBox.classList.add("is-open");

  overlayBox.addEventListener("click", closeModalOverlay)
  closeBtn.addEventListener("click", isCloseModal);
  window.addEventListener("keydown", closeEsc);
  window.addEventListener("keydown", scrolling);
}

// close

function isCloseModal(e) {
  lightBox.classList.remove("is-open")
  boxImg("","");
  // lightBoxImg.src = "";
  // lightBoxImg.alt = "";
  closeBtn.removeEventListener("click", isCloseModal);
  overlayBox.removeEventListener("click", closeModalOverlay)
  window.removeEventListener("keydown", closeEsc);
}

function closeModalOverlay(e) {
  if (e.carrentTarget === e.target) {
    isCloseModal(e);
  }  
}

function closeEsc(e) {
  if (e.code === "Escape") {
    isCloseModal(e);
  }  
}

// left-right 

const img = document.querySelectorAll(".gallery__image");
const arrayImages = [];

img.forEach((el) => {
  arrayImages.push(el.getAttribute("data-source"));
});

function scrolling(evt) {
  let newIndex;
  const currentId = arrayImages.indexOf(lightBoxImg.src);
  if (evt.key === "ArrowLeft") {
    newIndex = currentId - 1;
    if (newIndex == -1) {
      newIndex = arrayImages.length - 1;
    }
  } else if (evt.key === "ArrowRight") {
    newIndex = currentId + 1;
    if (newIndex === arrayImages.length) {
      newIndex = 0;
    }
  }
  lightBoxImg.src = arrayImages[newIndex];
}