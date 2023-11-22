/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
import { addToFavorite, isRestaurantFavorite } from '../src/scripts/index';

describe('Menyukai Restoran', () => {
  it('seharusnya tombol favorite terlihat sebelum menyukai restoran', async () => {
    document.body.innerHTML = `
      <div id="restoContainer">
        <i id="heartIcon" class="favorite-icon" data-restaurant-id="1"></i>
      </div>
    `;

    await isRestaurantFavorite(1);

    expect(document.querySelector('[aria-label="Tambahkan ke Favorite"]')).toBeTruthy();
  });

  it('seharusnya tidak menampilkan tombol sudah disukai sebelum menyukai restoran', async () => {
    document.body.innerHTML = `
      <div id="restoContainer">
        <i id="heartIcon" class="favorite-icon" data-restaurant-id="1"></i>
      </div>
    `;

    await isRestaurantFavorite(1);

    expect(document.querySelector('[aria-label="Hapus dari Favorite"]')).toBeFalsy();
  });

  it('seharusnya tombol favorite berubah disukai jika tombol ditekan dan ditambahkan ke dalam daftar favorit', async () => {
    document.body.innerHTML = `
      <div id="restoContainer">
        <i id="heartIcon" class="favorite-icon" data-restaurant-id="1"></i>
      </div>
    `;

    await isRestaurantFavorite(1);

    const heartIcon = document.getElementById('heartIcon');
    heartIcon.addEventListener('click', async () => {
      expect(document.querySelector('[aria-label="Hapus dari Favorite"]')).toBeTruthy();

      await addToFavorite(1);
      expect(await isRestaurantFavorite(1)).toBeTruthy();
    });
    heartIcon.click();
  });
});
