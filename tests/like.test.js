/* eslint-disable no-undef */
/* eslint-disable import/named */
// import {
//   addToFavorite,
//   isRestaurantFavorite,
// } from '../src/scripts/index';

describe('Menyukai Restoran', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="likeButtonContainer">
        <i id="heartIcon" class="favorite-icon" data-restaurant-id="1"></i>
      </div>
    `;
  });

  it('seharusnya heartIcon berwarna abu-abu ketika restoran belum disukai atau tidak ada dalam daftar favorit', async () => {
    // Pastikan heartIcon berwarna abu-abu awalnya
    expect(document.querySelector('.favorite-icon').style.color).toBe('grey');
    // Pastikan restoran belum ada dalam daftar favorit
    expect(await isRestaurantFavorite(1)).toBeFalsy();
  });
});

it('seharusnya heartIcon berubah warna menjadi merah jika tombol ditekan dan ditambahkan ke dalam daftar favorit', async () => {
  const heartIcon = document.querySelector('.favorite-icon');
  heartIcon.addEventListener('click', async () => {
    expect(document.querySelector('.favorite-icon').style.color).toBe('#AD0000');
    // Pastikan restoran sudah ditambahkan ke dalam daftar favorit
    await addToFavorite(1);
    expect(await isRestaurantFavorite(1)).toBeTruthy();
  });
  // Coba tambahkan restoran ke daftar favorit dengan mengklik tombol heartIcon
  heartIcon.click();
});

it('seharusnya tidak menambahkan data ke dalam daftar favorit jika restoran sudah disukai sebelumnya', async () => {
  // Pastikan restoran sudah ada dalam daftar favorit
  await isRestaurantFavorite(1).toBeTruthy();
  // Pastikan heartIcon berwarna merah awalnya
  expect(document.querySelector('.favorite-icon').style.color).toBe('grey');

  const heartIcon = document.querySelector('.favorite-icon');
  heartIcon.addEventListener('click', async () => {
    // Pastikan tombol ditekan
    expect(document.querySelector('.favorite-icon').style.color).toBe('#AD0000');
    // Pastikan addToFavorite tidak dipanggil karena restoran sudah disukai sebelumnya
    const addToFavoriteSpy = jest.spyOn(window, 'addToFavorite');
    await addToFavorite(1);

    expect(addToFavoriteSpy).not.toHaveBeenCalled();
  });

  heartIcon.click();
});

it('seharusnya tidak memproses penyimpanan jika restoran tidak memiliki ID', async () => {
  // Pastikan heartIcon berwarna abu-abu awalnya
  expect(document.querySelector('.favorite-icon').style.color).toBe('grey');
  // Pastikan restoran belum ada dalam daftar favorit
  expect(await isRestaurantFavorite(1)).toBeFalsy();

  const heartIcon = document.querySelector('.favorite-icon');
  heartIcon.addEventListener('click', async () => {
    // Pastikan tombol ditekan
    expect(document.querySelector('.favorite-icon').style.color).toBe('grey');
    // Pastikan addToFavorite tidak dipanggil karena restoran tidak memiliki ID
    const addToFavoriteSpy = jest.spyOn(window, 'addToFavorite');
    await addToFavorite(); // Panggil addToFavorite tanpa ID

    expect(addToFavoriteSpy).not.toHaveBeenCalled();
    // Pastikan restoran tidak ditambahkan ke dalam daftar favorit
    expect(await isRestaurantFavorite(1)).toBeFalsy();
  });

  heartIcon.click();
});
