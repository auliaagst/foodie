/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
import 'regenerator-runtime';
import '../styles/main.css';
import swRegister from './sw-register';

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});

window.addEventListener('load', () => {
  swRegister();
});

let db;

const request = window.indexedDB.open('RestoranDB', 1);

request.onerror = function (event) {
  console.log('Error: ', event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
  console.log('Database terbuka sukses');
  displayData(); // Memanggil fungsi displayData setelah database terbuka
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
            <img class="pict" src=https://restaurant-api.dicoding.dev/images/large/${restaurantDetail.pictureId} alt='${restaurantDetail.name}'>
            <i class="fas fa-heart favorite-icon ${favoriteClass}" data-restaurant-id="${restaurantId}" tabindex="0"></i>
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
    const heartIcon = detailPage.querySelector('.favorite-icon');
    if (isFavorite) {
      heartIcon.classList.add('favorited');
      heartIcon.style.color = '#AD0000';
    } else {
      heartIcon.style.color = 'grey';
    }

    heartIcon.addEventListener('click', async () => {
      const isFavorite = await isRestaurantFavorite(restaurantId);

      if (isFavorite) {
        removeFromFavorite(restaurantId);
        heartIcon.classList.remove('favorited');
        heartIcon.style.color = 'grey';
      } else {
        addToFavorite(restaurantId);
        heartIcon.classList.add('favorited');
        heartIcon.style.color = '#AD0000';
      }
    });

    const backButton = detailPage.querySelector('#backButton');
    backButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'index.html'; // Ganti dengan halaman utama Anda
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

      html += `
        <div class='resto' tabindex="0">
            <a href="#detail/${restaurant.id}">
                <img src=https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId} alt='${restaurant.name}'>
                <h2>${restaurant.name}</h2>
                <p>Rating: ${restaurant.rating}</p>
                <p>Kota: ${restaurant.city}</p>
            </a>
            <i class="fas fa-heart favorite-icon ${favoriteClass}" data-restaurant-id="${restaurant.id}" tabindex="0"></i>
        </div>
      `;
    });

    output.innerHTML = html;

    // LOPELOPE
    const heartIcons = document.querySelectorAll('.favorite-icon');

    heartIcons.forEach(async (heartIcon) => {
      const restaurantId = heartIcon.dataset.restaurantId;

      const isFavorite = await isRestaurantFavorite(restaurantId);

      if (isFavorite) {
        heartIcon.style.color = '#AD0000';
      } else {
        heartIcon.style.color = 'grey';
      }

      heartIcon.addEventListener('click', async (event) => {
        const restaurantId = event.target.dataset.restaurantId;
        const isFavorite = event.target.classList.contains('favorited');

        try {
          const transaction = db.transaction(['restoran'], 'readwrite');
          const objectStore = transaction.objectStore('restoran');

          if (isFavorite) {
            const deleteRequest = objectStore.delete(restaurantId);
            deleteRequest.onsuccess = function (event) {
              console.log(`Restaurant dengan ID ${restaurantId} dihapus dari favorit`);
              heartIcon.style.color = 'grey';
            };
          } else {
            const addRequest = objectStore.add({ id: restaurantId, favorite: true });
            addRequest.onsuccess = function (event) {
              console.log(`Restaurant dengan ID ${restaurantId} ditambahkan ke favorit`);
              heartIcon.style.color = '#AD0000';
            };
          }

          event.target.classList.toggle('favorited');
        } catch (error) {
          console.error('Error:', error);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substr(1);

  if (hash.startsWith('detail/')) {
    const restaurantId = hash.split('/')[1];
    showDetailPage(restaurantId);
  } else if (hash === 'favorites') {
    showFavoritesPage();
  }
});

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
    if (event.target.classList.contains('favorite-icon')) {
      const restaurantId = event.target.dataset.restaurantId;

      // Hapus data dari IndexedDB
      await removeFromFavorite(restaurantId);

      // Hapus elemen dari tampilan
      event.target.parentElement.remove();
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
                <img src=https://restaurant-api.dicoding.dev/images/large/${restaurantDetail.pictureId} alt='${restaurantDetail.name}'>
                <h2>${restaurantDetail.name}</h2>
                <p>Rating: ${restaurantDetail.rating}</p>
              <p>Kota: ${restaurantDetail.city}</p>
              </a>
              <i class="fas fa-heart favorite-icon favorited" data-restaurant-id="${restaurantDetail.id}" style="color: #AD0000;" tabindex="0"></i>
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
