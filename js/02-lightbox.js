import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const blockGallery = document.querySelector('.gallery');
const galleryList = galleryItems.map(item => 
    `<li>
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`
).join('');
blockGallery.innerHTML = galleryList;

const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt'});