import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
  </a>
</div>
    `;
    })
    .join("");
}

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

galleryContainer.addEventListener("click", onGalleryContainerClick);
function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(evt.target.dataset.source);
  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600"/>
  `);
  instance.show();

  galleryContainer.addEventListener("keydown", onEscapeKeyDown);

  function onEscapeKeyDown(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
