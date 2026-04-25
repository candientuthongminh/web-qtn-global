import { getProducts } from './api.js';

const container = document.getElementById("product-list");

async function load() {
  const products = await getProducts();

  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.images[0]}" />
        <h3>${p.name}</h3>
        <a href="chitiet.html?id=${p.id}">Xem chi tiết</a>
      </div>
    `;
  });
}

load();