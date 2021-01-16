import '../styles.css';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { alert, notice, info, success, error } from '@pnotify/core';
const { defaults } = require('@pnotify/core');
defaults.styling = 'material';
defaults.icons = 'material';

import refs from './refs.js';
import apiService from './apiService.js';
import {
  makeGalleryMarkup,
  addToGalleryMarkup,
} from './make-gallery-markup.js';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  apiService.resetPage();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  apiService.fetchGallery().then(images => {
    if (images.length >= 1) {
      makeGalleryMarkup(images);
    } else {
      const myError = error({
        text:
          'Sorry, we couldn`t find anything on your request. Please try again',
      });

      refs.galleryContainerRef.innerHTML = '';
      refs.loadMoreBtn.classList.add('disabled');
      return myError;
    }
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchGallery().then(images => {
    addToGalleryMarkup(images);

    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  });
});

refs.galleryContainerRef.addEventListener('click', event => {
  if (event.target.nodeName === 'IMG') {
    console.log('привет');
  }
});
