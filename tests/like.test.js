// Import fungsi atau modul yang diperlukan untuk pengujian
import { addToFavorite, removeFromFavorite, isRestaurantFavorite } from '../src/scripts/index'; // Sesuaikan dengan path sesungguhnya

describe('Restaurant Detail', () => {
  // Mock data restoran untuk pengujian
  const mockRestaurantId = '123';
  const mockRestaurant = {
    id: mockRestaurantId,
    name: 'Mock Restaurant',
    // ... tambahkan properti lain yang diperlukan
  };

  beforeEach(() => {
    // Set up before each test
    // Mungkin Anda perlu melakukan pembersihan atau inisialisasi lainnya
  });

  afterEach(() => {
    // Tear down after each test
    // Mungkin Anda perlu melakukan pembersihan atau inisialisasi lainnya
  });

  it('should initially show "Tambahkan ke Favorite"', async () => {
    // Mock fungsi isRestaurantFavorite untuk mengembalikan false
    isRestaurantFavorite.mockResolvedValue(false);

    // Setup elemen HTML atau state yang diperlukan
    document.body.innerHTML = `
      <div id="detailPage">
        <i class="fas fa-heart favorite-icon" data-restaurant-id="${mockRestaurantId}" tabindex="0"></i>
      </div>
    `;

    // Panggil showDetailPage atau fungsi yang menampilkan halaman detail
    // Pastikan untuk memanggil fungsi ini dengan ID restoran yang benar
    await showDetailPage(mockRestaurantId);

    // Pastikan aria-label pada awalnya adalah "Tambahkan ke Favorite"
    const heartIcon = document.querySelector('.favorite-icon');
    expect(heartIcon.getAttribute('aria-label')).toBe('Tambahkan ke Favorite');
  });

  it('should update to "Hapus dari Favorite" after clicking heartIcon', async () => {
    // Mock fungsi isRestaurantFavorite untuk mengembalikan false
    isRestaurantFavorite.mockResolvedValue(false);

    // Setup elemen HTML atau state yang diperlukan
    document.body.innerHTML = `
      <div id="detailPage">
        <i class="fas fa-heart favorite-icon" data-restaurant-id="${mockRestaurantId}" tabindex="0"></i>
      </div>
    `;

    // Mock fetch untuk mengembalikan data restoran
    jest.spyOn(window, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ restaurant: mockRestaurant }),
    });

    // Panggil showDetailPage atau fungsi yang menampilkan halaman detail
    // Pastikan untuk memanggil fungsi ini dengan ID restoran yang benar
    await showDetailPage(mockRestaurantId);

    // Periksa apakah fungsi addToFavorite dipanggil saat mengklik heartIcon
    const addToFavoriteSpy = jest.spyOn(window, 'addToFavorite');
    const heartIcon = document.querySelector('.favorite-icon');
    heartIcon.click();
    expect(addToFavoriteSpy).toHaveBeenCalledWith(mockRestaurantId);

    // Pastikan bahwa data restoran sudah disimpan
    const isFavorite = await isRestaurantFavorite(mockRestaurantId);
    expect(isFavorite).toBe(true);

    // Pastikan bahwa aria-label telah diperbarui menjadi "Hapus dari Favorite"
    expect(heartIcon.getAttribute('aria-label')).toBe('Hapus dari Favorite');
  });
});
