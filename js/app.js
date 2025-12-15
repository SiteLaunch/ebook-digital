fetch('data/ebooks.json')
  .then(res => res.json())
  .then(ebooks => {
    const grid = document.getElementById('ebookGrid');
    if (!grid) return;

    grid.innerHTML = '';

    ebooks.forEach(e => {
      const card = document.createElement('div');
      card.className = 'ebook';

      // Isi kad ebook
      card.innerHTML = `
        <img src="covers/${e.cover}" alt="${e.title}">
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        <div class="price">RM${e.price}</div>
      `;

      // Button beli (redirect ke backend emasmurah.com)
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.textContent = 'Beli Sekarang';

      btn.addEventListener('click', () => {
        window.location.href =
          'https://emasmurah.com/buy.php?ebook=' +
          encodeURIComponent(e.id);
      });

      card.appendChild(btn);
      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    const grid = document.getElementById('ebookGrid');
    if (grid) {
      grid.innerHTML =
        '<p style="color:#9ca3af">Gagal load ebook.</p>';
    }
  });
