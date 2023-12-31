/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
import 'regenerator-runtime';
import '../styles/main.css';
import swRegister from './sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

// service worker
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substr(1);

  if (hash.startsWith('detail/')) {
    const restaurantId = hash.split('/')[1];
    showDetailPage(restaurantId);
  } else if (hash === 'favorites') {
    showFavoritesPage();
  }
});

window.addEventListener('load', () => {
  swRegister();
});

// indexedDB

let db;

const request = window.indexedDB.open('RestoranDB', 1);

request.onerror = function (event) {
  console.log('Error: ', event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
  console.log('Database terbuka sukses');
  displayData(); // memanggil fungsi displayData setelah database terbuka
};

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore('restoran', { keyPath: 'id', autoIncrement: true });

  objectStore.createIndex('favorite', 'favorite', { unique: false });

  console.log('Database berhasil diupgrade');
};

document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('a[href="#home"]');
  const restoLink = document.querySelector('a[href="#restoo"]');
  const aboutUsLink = document.querySelector('a[href="#about-us"]');

  homeLink.addEventListener('click', (event) => {
    if (window.location.href.includes('detail') || window.location.href.includes('favorites')) {
      event.preventDefault();
      window.location.href = 'index.html';
    }
  });

  restoLink.addEventListener('click', (event) => {
    if (window.location.href.includes('detail') || window.location.href.includes('favorites')) {
      event.preventDefault();
      window.location.href = 'index.html';
    }
  });

  aboutUsLink.addEventListener('click', (event) => {
    if (window.location.href.includes('detail') || window.location.href.includes('favorites')) {
      event.preventDefault();
      window.location.href = 'index.html';
    }
  });
});

// halaman detail

const showDetailPage = async (restaurantId) => {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = '<div id="detailPage"></div>';

  const detailPage = document.getElementById('detailPage');

  try {
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${restaurantId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const restaurantDetail = data.restaurant;

    const isFavorite = await isRestaurantFavorite(restaurantId);
    const favoriteClass = isFavorite ? 'favorited' : '';

    const foods = restaurantDetail.menus && restaurantDetail.menus.foods ? restaurantDetail.menus.foods.map((food) => food.name).join(', ') : 'Data tidak tersedia';
    const drinks = restaurantDetail.menus && restaurantDetail.menus.drinks ? restaurantDetail.menus.drinks.map((drink) => drink.name).join(', ') : 'Data tidak tersedia';

    detailPage.innerHTML = `
        <div class='resto-detail'>
          <div class="left">
            <img class="lazyload" data-src=https://restaurant-api.dicoding.dev/images/large/${restaurantDetail.pictureId} alt='${restaurantDetail.name}' crossorigin="anonymous">
            <div class="favorite-container" data-restaurant-id="${restaurantId}" tabindex="0" >
              <i class="fas fa-heart favorite-icon ${favoriteClass}"></i>
            </div>
          </div>
          <div class="right">
            <h2>${restaurantDetail.name}</h2>
            <p>Rating: ${restaurantDetail.rating}</p>
            <p>Alamat: ${restaurantDetail.address}</p>
            <p>Kota: ${restaurantDetail.city}</p>
            <p>Deskripsi: ${restaurantDetail.description}</p>
            <p>Menu Makanan: ${foods}</p>
            <p>Menu Minuman: ${drinks}</p>
            <h3>Customer Reviews</h3>
            <ul>
              ${restaurantDetail.customerReviews.map((review) => `<li>${review.name}: ${review.review}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;

    // Menambahkan event listener pada ikon hati di halaman detail
    const favoriteContainer = detailPage.querySelector('.favorite-container');

    if (isFavorite) {
      favoriteContainer.classList.add('favorited');
      favoriteContainer.style.color = '#AD0000';
      favoriteContainer.setAttribute('aria-label', 'Hapus Dari Favorite');
    } else {
      favoriteContainer.style.color = 'grey';
      favoriteContainer.setAttribute('aria-label', 'Tambahkan ke Favorite');
    }

    favoriteContainer.addEventListener('click', async () => {
      const restaurantId = favoriteContainer.dataset.restaurantId;
      const isFavorite = await isRestaurantFavorite(restaurantId);

      if (isFavorite) {
        removeFromFavorite(restaurantId);
        favoriteContainer.classList.remove('favorited');
        favoriteContainer.style.color = 'grey';
        favoriteContainer.setAttribute('aria-label', 'Tambahkan ke Favorite');
      } else {
        addToFavorite(restaurantId);
        favoriteContainer.classList.add('favorited');
        favoriteContainer.style.color = '#AD0000';
        favoriteContainer.setAttribute('aria-label', 'Hapus Dari Favorite');
      }
    });

    const backButton = detailPage.querySelector('#backButton');
    backButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'index.html';
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const displayData = async () => {
  const output = document.getElementById('output');
  let html = '';

  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    data.restaurants.forEach((restaurant) => {
      const isFavorite = isRestaurantFavorite(restaurant.id);
      const favoriteClass = isFavorite ? 'favorited' : '';
      const favoriteColor = isFavorite ? 'color: #AD0000;' : 'color: grey;';

      html += `
        <div class='resto' id='restoContainer' tabindex="0">
            <a href="#detail/${restaurant.id}">
                <img class="lazyload" data-src=https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId} alt='${restaurant.name}' crossorigin="anonymous">
                <h2 class="name">${restaurant.name}</h2>
                <p>Rating: ${restaurant.rating}</p>
                <p>Kota: ${restaurant.city}</p>
            </a>
            <div class="favorite-container" data-restaurant-id="${restaurant.id}" style="${favoriteColor}">
                <i class="fas fa-heart favorite-icon ${favoriteClass}" tabindex="0"></i>
            </div>
        </div>
      `;
    });

    output.innerHTML = html;

    const favoriteContainer = document.querySelectorAll('.favorite-container');
    favoriteContainer.forEach(async (favoriteContainer) => {
      const restaurantId = favoriteContainer.dataset.restaurantId;

      const isFavorite = await isRestaurantFavorite(restaurantId);

      if (isFavorite) {
        favoriteContainer.style.color = '#AD0000';
        favoriteContainer.setAttribute('aria-label', 'Hapus Dari Favorite');
      } else {
        favoriteContainer.style.color = 'grey';
        favoriteContainer.setAttribute('aria-label', 'Tambahkan ke Favorite');
      }

      favoriteContainer.addEventListener('click', async () => {
        const restaurantId = favoriteContainer.dataset.restaurantId;
        const isFavorite = favoriteContainer.classList.contains('favorited');

        try {
          const transaction = db.transaction(['restoran'], 'readwrite');
          const objectStore = transaction.objectStore('restoran');

          if (isFavorite) {
            const deleteRequest = objectStore.delete(restaurantId);
            deleteRequest.onsuccess = function () {
              console.log(`Restaurant dengan ID ${restaurantId} dihapus dari favorit`);
              favoriteContainer.style.color = 'grey';
              favoriteContainer.setAttribute('aria-label', 'Tambahkan ke Favorite');
            };
          } else {
            const addRequest = objectStore.add({ id: restaurantId, favorite: true });
            addRequest.onsuccess = function () {
              console.log(`Restaurant dengan ID ${restaurantId} ditambahkan ke favorit`);
              favoriteContainer.style.color = '#AD0000';
              favoriteContainer.setAttribute('aria-label', 'Hapus Dari Favorite');
            };
          }

          favoriteContainer.classList.toggle('favorited');
        } catch (error) {
          console.error('Error:', error);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const addToFavorite = async (restaurantId) => {
  const transaction = db.transaction(['restoran'], 'readwrite');
  const objectStore = transaction.objectStore('restoran');
  const addRequest = objectStore.add({ id: restaurantId, favorite: true });

  addRequest.onsuccess = function (event) {
    console.log(`Restaurant dengan ID ${restaurantId} ditambahkan ke favorit`);
  };
};

const isRestaurantFavorite = async (restaurantId) => {
  const transaction = db.transaction(['restoran'], 'readonly');
  const objectStore = transaction.objectStore('restoran');
  const getRequest = objectStore.get(restaurantId);

  return new Promise((resolve, reject) => {
    getRequest.onsuccess = function (event) {
      const result = event.target.result;
      resolve(!!result);
    };

    getRequest.onerror = function (event) {
      reject(event.target.error);
    };
  });
};

const removeFromFavorite = async (restaurantId) => {
  const transaction = db.transaction(['restoran'], 'readwrite');
  const objectStore = transaction.objectStore('restoran');
  const deleteRequest = objectStore.delete(restaurantId);

  deleteRequest.onsuccess = function (event) {
    console.log(`Restaurant dengan ID ${restaurantId} dihapus dari favorit`);
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const bars = document.querySelectorAll('.bar');
  const closeIcon = document.querySelector('.close-icon');

  const toggleMenu = () => {
    menu.classList.toggle('active');
    bars.forEach((bar) => bar.classList.toggle('active'));
    closeIcon.classList.toggle('active');
  };

  menuToggle.addEventListener('click', toggleMenu);

  closeIcon.addEventListener('click', () => {
    menu.classList.remove('active');
    bars.forEach((bar) => bar.classList.remove('active'));
    closeIcon.classList.remove('active');
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('active');
      bars.forEach((bar) => bar.classList.remove('active'));
      closeIcon.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const favoriteLink = document.querySelector('a[href="#favorites"]');

  favoriteLink.addEventListener('click', (event) => {
    event.preventDefault();
    showFavoritesPage();
    window.location.hash = 'favorites';
  });
});

function showFavoritesPage() {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <header class="headF">
      <h1>Your Favorite Restaurants</h1>
    </header>
    <main class="containerfav "id="favoritesList">
      <!-- Daftar restoran favorit akan ditampilkan di sini -->
    </main>
  `;

  const favoritesList = document.getElementById('favoritesList');
  favoritesList.addEventListener('click', async (event) => {
    const favoriteContainer = event.target.closest('.favorite-container');

    if (favoriteContainer) {
      const restaurantId = favoriteContainer.dataset.restaurantId;

      await removeFromFavorite(restaurantId);

      // Hapus elemen restoran dari tampilan
      const restoContainer = favoriteContainer.parentElement;
      restoContainer.remove();
    }
  });

  const transaction = db.transaction(['restoran'], 'readonly');
  const objectStore = transaction.objectStore('restoran');

  objectStore.openCursor().onsuccess = function (event) {
    const cursor = event.target.result;

    if (cursor) {
      const restaurantId = cursor.value.id;

      fetch(`https://restaurant-api.dicoding.dev/detail/${restaurantId}`)
        .then((response) => response.json())
        .then((data) => {
          const restaurantDetail = data.restaurant;
          const favoriteItem = document.createElement('div');
          favoriteItem.classList.add('resto');

          favoriteItem.innerHTML = `
              <a href="#detail/${restaurantDetail.id}">
                <img class="lazyload" data-src=https://restaurant-api.dicoding.dev/images/large/${restaurantDetail.pictureId} alt='${restaurantDetail.name}' crossorigin="anonymous">
                <h2>${restaurantDetail.name}</h2>
                <p>Rating: ${restaurantDetail.rating}</p>
              <p>Kota: ${restaurantDetail.city}</p>
              </a>
              <div class="favorite-container" data-restaurant-id="${restaurantDetail.id}" tabindex="0" >
                <i class="fas fa-heart favorite-icon favorited" style="color: #AD0000;"></i>
              </div>
          `;

          favoritesList.appendChild(favoriteItem);
        });

      cursor.continue();
    }
  };
}

class MyFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const footer = document.createElement('footer');
    footer.textContent = 'FOODIE ©2023, Aulia Augusta';
    shadow.appendChild(footer);

    const style = document.createElement('style');
    style.textContent = `
      footer {
        background-color: #FFC670;
        color: #FFEEEE;
        padding: 15px;
        text-align: center;
      }
    `;
    shadow.appendChild(style);
  }
}

customElements.define('my-footer', MyFooter);

import('lodash.filter')
  .then((module) => module.default)
  // .then(filterContacts)
  .catch((error) => alert(error));

export default { addToFavorite, removeFromFavorite, isRestaurantFavorite };
