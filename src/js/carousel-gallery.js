// const img = document.querySelectorAll(".gallery__image");
// const arrayImages = [];

// img.forEach((el) => {
//   arrayImages.push(el.getAttribute("data-source"));
// });

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

export default scrolling;


/*
const carousel = {
  scrolling: function (evt) {
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
},

closeModalOverlay: function (e) {
  if (e.carrentTarget === e.target) {
    isCloseModal(e);
  }  
},

closeEsc: function (e) {
  if (e.code === "Escape") {
    isCloseModal(e);
  }  
},
}

export const scrolling = carousel.scrolling;
export const closeModalOverlay = carousel.closeModalOverlay;
export const closeEsc = carousel.closeEsc;
*/
