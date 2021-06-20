import images from './gallery-items.js';
import scrolling from './carousel-gallery.js';

const galleryBox = document.querySelector('.js-gallery');
const overlayBox = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const lightBoxImg = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector(`[data-action="close-lightbox"]`);

const imgMarkup = createGallery(images);

const boxImg = (src, alt) => {
  lightBoxImg.src = src;
  lightBoxImg.alt = alt;
};

galleryBox.insertAdjacentHTML('beforeend', imgMarkup);

galleryBox.addEventListener('click', isOpenModal);
closeBtn.addEventListener('click', isCloseModal);

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class ="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </li>
    `;
    })
    .join('');
}

let index = null;

function isOpenModal(e) {
  const galleryEl = e.target;
  e.preventDefault();
  if (galleryEl.nodeName !== 'IMG') {
    return;
  }

  boxImg(galleryEl.dataset.source, galleryEl.alt);

  lightBox.classList.add('is-open');

  overlayBox.addEventListener('click', closeModalOverlay);
  closeBtn.addEventListener('click', isCloseModal);
  window.addEventListener('keydown', closeEsc);
  window.addEventListener('keydown', scrolling);
}

function isCloseModal(e) {
  lightBox.classList.remove('is-open');
  boxImg('', '');
  index = null;
  closeBtn.removeEventListener('click', isCloseModal);
  overlayBox.removeEventListener('click', closeModalOverlay);
  window.removeEventListener('keydown', closeEsc);
  window.removeEventListener('keydown', scrolling);
}

function closeModalOverlay(e) {
  if (e.carrentTarget === e.target) {
    isCloseModal(e);
  }
}

function closeEsc(e) {
  if (e.code === 'Escape') {
    isCloseModal(e);
  }
}

export default lightBoxImg;
