// restaurant.test.js
import '@babel/preset-env';
import 'fake-indexeddb/auto';
import {
  addToFavorite,
  removeFromFavorite,
  isRestaurantFavorite,
} from '../src/scripts/index'; // Ganti dengan path yang sesuai

describe('Fungsi Restoran', () => {
  test('addToFavorite menambahkan restoran ke favorit', async () => {
    // Mock data
    const mockRestaurantId = '123';

    // Panggil fungsi addToFavorite
    await addToFavorite(mockRestaurantId);

    // Periksa apakah restoran telah ditambahkan ke favorit
    const isFavorite = await isRestaurantFavorite(mockRestaurantId);
    expect(isFavorite).toBeTruthy();
  });

  test('removeFromFavorite menghapus restoran dari favorit', async () => {
    // Mock data
    const mockRestaurantId = '123';

    // Tambahkan restoran ke favorit terlebih dahulu
    await addToFavorite(mockRestaurantId);

    // Panggil fungsi removeFromFavorite
    await removeFromFavorite(mockRestaurantId);

    // Periksa apakah restoran telah dihapus dari favorit
    const isFavorite = await isRestaurantFavorite(mockRestaurantId);
    expect(isFavorite).toBeFalsy();
  });

  test('isRestaurantFavorite mengembalikan true untuk restoran favorit', async () => {
    // Mock data
    const mockRestaurantId = '123';

    // Tambahkan restoran ke favorit terlebih dahulu
    await addToFavorite(mockRestaurantId);

    // Panggil fungsi isRestaurantFavorite
    const isFavorite = await isRestaurantFavorite(mockRestaurantId);

    // Periksa apakah fungsi mengembalikan true
    expect(isFavorite).toBeTruthy();
  });

  test('isRestaurantFavorite mengembalikan false untuk restoran yang bukan favorit', async () => {
    // Mock data
    const mockRestaurantId = '123';

    // Pastikan restoran tidak ada di favorit
    await removeFromFavorite(mockRestaurantId);

    // Panggil fungsi isRestaurantFavorite
    const isFavorite = await isRestaurantFavorite(mockRestaurantId);

    // Periksa apakah fungsi mengembalikan false
    expect(isFavorite).toBeFalsy();
  });
});
