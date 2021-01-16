import galleryTpl from '../templates/gallery.hbs';
import refs from './refs.js';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const basicLightbox = require('basiclightbox');

function makeGalleryMarkup(images) {
  refs.galleryContainerRef.innerHTML = '';
  addToGalleryMarkup(images);
}

function addToGalleryMarkup(images) {
  const markup = galleryTpl({ images });
  refs.galleryContainerRef.insertAdjacentHTML('beforeend', markup);
  refs.loadMoreBtn.classList.remove('disabled');
}

export { makeGalleryMarkup, addToGalleryMarkup };

// refs.galleryContainerRef.addEventListener('click', event => {
//   console.log(event.target);
// });
