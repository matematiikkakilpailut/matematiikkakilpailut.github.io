(() => {
  const tanaan = new Date().toLocaleDateString('sv', {
    timeZone: 'Europe/Helsinki',
  });
  const paneelit = [...document.querySelectorAll('[data-mk-tapahtumat] [data-alkaa]')];
  const seuraava = paneelit.find((p) => (p.dataset.paattyy || p.dataset.alkaa) >= tanaan);
  paneelit.forEach((p) => { p.hidden = p !== seuraava; });
  if (seuraava) {
    const paivia = Math.round((new Date(seuraava.dataset.alkaa) - new Date(tanaan)) / 86400000);
    seuraava.querySelector('[data-mk-paivia]').textContent =
      paivia > 1 ? `${paivia} päivän päästä`
      : paivia === 1 ? 'huomenna'
      : paivia === 0 ? 'alkaa tänään'
      : 'käynnissä nyt';
  }

  const rivit = [...document.querySelectorAll('.mk-tapahtumat > li[data-alkaa]')].map((rivi) => ({
    rivi,
    alkaa: rivi.dataset.alkaa,
    paattyy: rivi.dataset.paattyy || rivi.dataset.alkaa,
  }));
  const seuraavaRivi = rivit
    .filter((r) => r.alkaa > tanaan)
    .sort((a, b) => a.alkaa.localeCompare(b.alkaa))[0];
  rivit.forEach((r) => {
    r.rivi.classList.toggle('mennyt', r.paattyy < tanaan);
    r.rivi.classList.toggle('kaynnissa', r.paattyy >= tanaan && r.alkaa <= tanaan);
    r.rivi.classList.toggle('seuraava', r === seuraavaRivi);
  });
})();
