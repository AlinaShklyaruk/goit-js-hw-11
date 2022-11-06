import './css/styles.css';
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const axios = require('axios');

const inputEl = document.querySelector('#search-form');
const searchBtnEl = document.querySelector('button[submit]');
const galleryEl = document.querySelector('div.gallery');

inputEl.addEventListener('input', onInput);
function onInput(event) {
    const searchQuery = event.target.searchQuery.value;
    console.log(searchQuery);
}