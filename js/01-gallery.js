import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const blockGallery = document.querySelector('.gallery');

const galleryList = galleryItems.map(item =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
).join('');
blockGallery.innerHTML = galleryList;
let roadImg;

function onOpenModalImg() {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  roadImg = basicLightbox.create(`
    <img
      src="${event.target.dataset.source}"
    />
`, {
    onShow: (roadImg) => {
  window.addEventListener('keydown', onClickEscClose);
    },
  },
    {
      onClose: (roadImg) => {
    window.removeEventListener('keydown', onClickEscClose);
}})
  roadImg.show()
}

function onClickEscClose(event) {
  if (event.code === "Escape") {
    roadImg.close();
    console.log(event.code);
    return;
  }
}

blockGallery.addEventListener('click', (event) => {
  event.preventDefault();
  onOpenModalImg();
})


