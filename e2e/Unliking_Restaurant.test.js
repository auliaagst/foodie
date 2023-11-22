/* eslint-disable no-undef */
Feature('Membatalkan Menyukai Restoran');

Scenario('Menyukai Restoran', async ({ I }) => {
  I.amOnPage('/#/home');

  // Memastikan kita berada di halaman yang benar
  I.see('.resto');

  // Memastikan tombol like ada
  I.seeElement('.favorite-icon');

  // Capture status favorit awal
  const initialFavoriteStatus = await I.grabAttributeFrom('.favorite-icon', 'class');

  // Memastikan restoran tidak disukai awalnya
  I.see('favorited', initialFavoriteStatus);

  // Klik tombol like lagi untuk membatalkan menyukai
  I.click('.favorite-icon');

  // Memastikan restoran tidak disukai setelah dibatalkan
  I.dontSee('favorited', '.favorite-icon');
});
