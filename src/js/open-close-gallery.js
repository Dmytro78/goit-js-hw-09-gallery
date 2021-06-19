export function isOpenModal(e) {
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

export function isCloseModal(e) {
  lightBox.classList.remove("is-open")
  boxImg("","");
  // lightBoxImg.src = "";
  // lightBoxImg.alt = "";
  closeBtn.removeEventListener("click", isCloseModal);
  overlayBox.removeEventListener("click", closeModalOverlay)
  window.removeEventListener("keydown", closeEsc);
}

export function closeModalOverlay(e) {
  if (e.carrentTarget === e.target) {
    isCloseModal(e);
  }  
}

export function closeEsc(e) {
  if (e.code === "Escape") {
    isCloseModal(e);
  }  
}