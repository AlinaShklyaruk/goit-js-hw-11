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

formEl.addEventListener('submit', onSearch);
async function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value;
  
  getPictures(searchQuery);
  console.log(searchQuery);
 
}

async function getPictures(searchQuery) {
  try {
    const response = await axios.get(`${BASE_URL}?key=${KEY_API}&q=${searchQuery}&image_type=photo&orientation=hotizontal&safesearch=true&per_page=40&page=${numberOfPage}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}