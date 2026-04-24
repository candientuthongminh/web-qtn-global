import { getProducts } from './api.js';

const container = document.getElementById("product-list");

getProducts().then(products => {
  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image_main}">
        <h3>${p.name}</h3>
        <a href="chitiet.html?id=${p.id}">Xem chi tiết</a>
      </div>
    `;
  });
});
