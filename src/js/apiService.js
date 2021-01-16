import refs from './refs.js';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { alert, notice, info, success, error } from '@pnotify/core';
const { defaults } = require('@pnotify/core');
defaults.styling = 'material';
defaults.icons = 'material';

const axios = require('axios').default;
axios.defaults.baseURL = 'https://pixabay.com/api';
const token = '19908670-1dd1b8415290a1f574a86bd8e';

// const headers = {
//   Autorization: `Bearer ${token}`,
// };

export default {
  searchQuery: '',
  page: 1,

  async fetchGallery(searchQuery) {
    try {
      const result = await axios.get(
        `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${token}`,
      );
      console.log(result.data.hits);
      this.page += 1;
      return result.data.hits;
    } catch (err) {
      throw err;
    }
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};
