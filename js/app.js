fetch('data/ebooks.json')
  .then(res => {
    if (!res.ok) {
      throw new Error('Gagal load ebooks.json');
    }
    return res.json();
  })
  .then(ebooks => {
    const grid = document.getElementById('ebookGrid');
    if (!grid) return;

    // Clear (safety)
    grid.innerHTML = '';

    ebooks.forEach(e => {
      const card = document.createElement('div');
      card.className = 'ebook';

      card.innerHTML = `
        <img src="covers/${e.cover}" alt="${e.title}">
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        <div class="price">RM${e.price}</div>

        <!-- DUMMY BUY BUTTON -->
        <a href="https://example.com/buy?ebook=${encodeURIComponent(e.id)}"
           class="btn">
           Beli Sekarang
        </a>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    const grid = document.getElementById('ebookGrid');
    if (grid) {
      grid.innerHTML =
        '<p style="color:#9ca3af">Gagal load ebook. Sila refresh.</p>';
    }
  });
