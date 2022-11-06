import './css/styles.css';
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const axios = require('axios');

const inputEl = document.querySelector('#search-form');
const searchBtnEl = document.querySelector('button[submit]');
const galleryEl = document.querySelector('div.gallery');

inputEl.addEventListener('submit', onInput);
function onInput(event) {
    const searchQuery = event.target.elements.searchQuery.value;
    getUser(searchQuery).then(response => response.json());
    console.log(getUser(searchQuery));
    console.log(response);
}
async function getUser() {
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=31136812-0f1a6a81def38a9fb9e0c181f&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
