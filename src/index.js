import './css/styles.css';
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
//const axios = require('axios');

const KEY_API = '31136812-0f1a6a81def38a9fb9e0c181f';
const BASE_URL = 'https://pixabay.com/api/';

const formEl = document.querySelector('#search-form');
//const inputEl = document.querySelector('input[name="searchQuery"]')
const searchBtnEl = document.querySelector('button[submit]');
const galleryEl = document.querySelector('div.gallery');
const loadMoreBtnEl = document.querySelector('.load-more');

let numberOfPage = 1;
let searchQuery = '';

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

formEl.addEventListener('submit', onSearch);
async function onSearch(event) {
  event.preventDefault();
  searchQuery = event.currentTarget.elements.searchQuery.value;
  
  getPictures(searchQuery);
  console.log(searchQuery);
 
}

async function getPictures(searchQuery) {
  try {
    const response = await axios.get(`${BASE_URL}?key=${KEY_API}&q=${searchQuery}&image_type=photo&orientation=hotizontal&safesearch=true&per_page=40&page=${numberOfPage}`);
    console.log(response.data);
    return response.data;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function onLoadMoreBtnClick() {
  numberOfPage += 1;
  getPictures(searchQuery);
  if (numberOfPage === totalHits) {
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  }
}

function createPicturesMarkup(pictures) {
  return pictures.map((picture) => `<li class="gallery-item"><div class="photo-card">
  <img src="${picture.webformatURL}" alt="${picture.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${picture.likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${picture.views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${picture.hits.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${picture.downloads}
    </p>
  </div>
</div></li>`).join("");
}