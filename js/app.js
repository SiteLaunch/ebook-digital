fetch('data/ebooks.json')
  .then(res => res.json())
  .then(ebooks => {
    const grid = document.getElementById('ebookGrid');
    if (!grid) return;

    grid.innerHTML = '';

    ebooks.forEach(e => {
      const card = document.createElement('div');
      card.className = 'ebook';

      card.innerHTML = `
        <img src="covers/${e.cover}" alt="${e.title}">
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        <div class="price">RM${e.price}</div>

        <!-- BUY BUTTON (TEST REDIRECT) -->
        <a href="https://google.com/?ebook=${encodeURIComponent(e.id)}"
           class="btn"
           target="_blank"
           rel="noopener">
           Beli Sekarang
        </a>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById('ebookGrid').innerHTML =
      '<p style="color:#9ca3af">Gagal load ebook.</p>';
  });
