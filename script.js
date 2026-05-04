const container = document.getElementById("product-list");

const html = products.map(p => `
  <div class="card">
    <img src="${p.images[0]}" class="thumb">
    <h2>${p.name}</h2>
    <p>${p.desc}</p>
    <a href="chitiet.html?slug=${p.slug}" class="btn">Xem chi tiết</a>
  </div>
`).join("");

container.innerHTML = html;
