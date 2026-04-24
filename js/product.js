import { getProducts, getVariants } from './api.js';

const id = new URLSearchParams(window.location.search).get("id");

Promise.all([getProducts(), getVariants()])
.then(([products, variants]) => {

  const product = products.find(p => p.id === id);

  document.getElementById("name").innerText = product.name;
  document.getElementById("main-img").src = product.image_main;

  const thumbs = document.getElementById("thumbs");
  const images = product.images.split(",");

  images.forEach(img => {
    thumbs.innerHTML += `<img src="${img}" onclick="document.getElementById('main-img').src='${img}'">`;
  });

  const table = document.getElementById("specs");

  variants
    .filter(v => v.product_id.includes(id))
    .forEach(v => {
      table.innerHTML += `
        <tr>
          <td>${v.weight}</td>
          <td>${v.price}</td>
          <td>${v.specs}</td>
        </tr>
      `;
    });
});
