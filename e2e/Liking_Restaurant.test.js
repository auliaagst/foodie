/* eslint-disable no-undef */
Feature('Menyukai dan Membatalkan Menyukai Restoran');

Scenario('Menyukai dan Membatalkan Menyukai Restoran', async ({ I }) => {
  I.amOnPage('/');

  // Memastikan kita berada di halaman yang benar
  I.see('.resto');

  // Klik restoran untuk melihat detail
  I.click('#detail');

  // Memastikan tombol like ada
  I.seeElement('.favorite-icon');

  // Capture status favorit awal
  const initialFavoriteStatus = await I.grabAttributeFrom('.favorite-icon', 'class');

  // Memastikan restoran tidak disukai awalnya
  I.dontSee('favorited', initialFavoriteStatus);

  // Klik tombol like
  I.click('.favorite-icon');

  // Memastikan restoran disukai setelah diklik
  I.see('favorited', '.favorite-icon');

  // Klik tombol like lagi untuk membatalkan menyukai
  I.click('.favorite-icon');

  // Memastikan restoran tidak disukai setelah dibatalkan
  I.dontSee('favorited', '.favorite-icon');
});
