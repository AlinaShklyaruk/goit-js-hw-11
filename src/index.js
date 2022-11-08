import './css/styles.css';
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const axios = require('axios');

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('input[name="searchQuery"]')
const searchBtnEl = document.querySelector('button[submit]');
const galleryEl = document.querySelector('div.gallery');

