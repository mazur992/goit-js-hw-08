import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const listEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a rel="noopener noreferrer"  href=${original}><img loading="lazy" class="gallery__image" src=${preview} alt=${description
        .split(' ')
        .join('_')}></a></li>`
  )
  .join('');
listEl.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  scrollZoom: false,
});
