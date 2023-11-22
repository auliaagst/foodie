/* eslint-disable no-undef */
Feature('Menyukai Restoran');

Scenario('Menyukai Restoran', async ({ I }) => {
  I.amOnPage('/#/home');

  // Memastikan kita berada di halaman yang benar
  I.seeElement('.resto a .name');
  I.click(locate('.resto a .name').first());

  // Memastikan tombol like ada
  I.seeElement('.favorite-container');
  I.click('.favorite-container');

  I.click('#favPage');
  I.seeElement('.resto');
});
