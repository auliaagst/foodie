/* eslint-disable no-undef */
Feature('Membatalkan Menyukai Restoran');

Scenario('Membatalkan Menyukai Restoran', async ({ I }) => {
  I.amOnPage('/#/home');

  // Memastikan kita berada di halaman yang benar
  I.seeElement('.favorite-container');
  I.click(locate('.favorite-container').first());

  I.click('#favPage');
  I.seeElement('.resto');

  I.seeElement('.favorite-container');
  I.click(locate('.favorite-container').first());

  I.dontSeeElement('.resto');
});
