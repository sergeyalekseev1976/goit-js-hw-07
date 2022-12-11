import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</div>
    `;
    })
    .join("");
}

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
let galleryLightBox = new SimpleLightbox(".gallery a", { captionData: "alt", captionPosition: "bottom", captionDelay: 250 });

// galleryLightBox.on("show.simpleLightBox", function () {});
