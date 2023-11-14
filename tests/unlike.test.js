/* eslint-disable import/named */
/* eslint-disable no-undef */
// import {
//   removeFromFavorite,
//   isRestaurantFavorite,
// } from '../src/scripts/index';

describe('Batal menyukai restaurant', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div id="likeButtonContainer">
          <i id="heartIcon" class="favorite-icon" data-restaurant-id="1"></i>
        </div>
      `;
  });

  it('seharusnya heartIcon berwarna merah jika restoran sudah disukai sebelumnya', async () => {
    // Pastikan heartIcon berwarna merah awalnya
    expect(document.getElementById('heartIcon').style.color).toBe('#AD0000');
    // Pastikan restoran sudah ada dalam daftar favorite
    expect(await isRestaurantFavorite(1)).toBeTruthy();
  });

  it('seharusnya heartIcon berwarna abu-abu jika restoran berhasil dihapus dari daftar favorit', async () => {
    const heartIcon = document.getElementById('heartIcon');
    heartIcon.addEventListener('click', async () => {
      // Pastikan tombol ditekan
      expect(document.getElementById('heartIcon').style.color).toBe('#AD0000');
      // Pastikan removeFromFavorite dipanggil saat tombol ditekan
      const removeFromFavoriteSpy = jest.spyOn(window, 'removeFromFavorite');
      await removeFromFavorite(1);

      expect(removeFromFavoriteSpy).toHaveBeenCalled();
      // Pastikan restoran tidak ada dalam daftar favorit
      expect(await isRestaurantFavorite(1)).toBeFalsy();
      // Pastikan heartIcon berwarna abu-abu setelah restoran dihapus
      expect(document.getElementById('heartIcon').style.color).toBe('grey');
    });

    heartIcon.click();
  });

  it('seharusnya tidak memproses penghapusan jika restoran tidak ada dalam daftar favorit', async () => {
    // Pastikan restoran tidak ada dalam daftar favorit
    expect(await isRestaurantFavorite(1)).toBeFalsy();
    // Pastikan heartIcon berwarna abu-abu awalnya
    expect(document.getElementById('heartIcon').style.color).toBe('grey');

    const heartIcon = document.getElementById('heartIcon');
    heartIcon.addEventListener('click', async () => {
      // Pastikan tombol ditekan
      expect(document.getElementById('heartIcon').style.color).toBe('grey');
      // Pastikan removeFromFavorite tidak dipanggil karena restoran tidak ada dalam daftar favorit
      const removeFromFavoriteSpy = jest.spyOn(window, 'removeFromFavorite');
      await removeFromFavorite(1);

      expect(removeFromFavoriteSpy).not.toHaveBeenCalled();
      // Pastikan restoran tidak ada dalam daftar favorit
      expect(await isRestaurantFavorite(1)).toBeFalsy();
    });

    heartIcon.click();
  });
});
