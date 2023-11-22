/* eslint-disable import/named */
/* eslint-disable no-undef */
import { removeFromFavorite, isRestaurantFavorite } from '../src/scripts/index';

describe('Batal Menyukai Restoran', () => {
  const addLikeButton = () => {
    document.body.innerHTML = `<div id="restoContainer">
        <i id="heartIcon" class="favorite-icon" data-restaurant-id="1"></i>
      </div>`;
  };

  beforeEach(async () => {
    addLikeButton();
    await isRestaurantFavorite(1);
  });

  afterEach(async () => {
    await removeFromFavorite(1);
  });

  it('seharusnya tombol sudah disukai jika restoran sudah disukai sebelumnya', async () => {
    // Pastikan heartIcon berwarna merah awalnya
    expect(document.querySelector('[aria-label="Hapus dari Favorite"]')).toBeTruthy();
    expect(await isRestaurantFavorite(1)).toBeTruthy();
  });

  it('seharusnya tombol berubah belum disukai jika restoran berhasil dihapus dari daftar favorit', async () => {
    await isRestaurantFavorite(1);

    const heartIcon = document.getElementById('heartIcon');
    heartIcon.addEventListener('click', async () => {
      const removeFromFavoriteSpy = jest.spyOn(window, 'removeFromFavorite');
      await removeFromFavorite(1);
      expect(removeFromFavoriteSpy).toHaveBeenCalled();
      expect(await isRestaurantFavorite(1)).toBeFalsy();
      expect(document.querySelector('[aria-label="Tambahkan ke Favorite"]')).toBeTruthy();
    });
    heartIcon.click();
  });
});
