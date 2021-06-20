import lightBoxImg  from './gallery';
import images from './gallery-items.js';


const imagesLength = images.length - 1;
const lightboxImageRef = document.querySelector('.lightbox__image');

function scrolling(evt) {
  let index = images.findIndex(item => item.original === lightboxImageRef.getAttribute('src'));

  if (evt.key === 'ArrowLeft') {
    index -= 1;
    if (index < 0) {
      index = imagesLength;
    }
  } else if (evt.key === 'ArrowRight') {
    index += 1;
    if (index > imagesLength) {
      index = 0;
    }
  }
  lightBoxImg.src = images[index].original;
}

export default scrolling;