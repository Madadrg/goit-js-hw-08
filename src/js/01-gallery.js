// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descris în documentație
import SimpleLightbox from 'simplelightbox';
// Import suplimentar de stil
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const createGalleryItems = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item"> 
        <a class= "gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}" />
</a>
</li>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItems);

const galleryHandler = new SimpleLightbox('ul.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});
galleryHandler.on('show.simplelightbox');
