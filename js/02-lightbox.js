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

blockGallery.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
    }
    let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt'});
gallery.on('show.simplelightbox');
  console.log(event);
})
