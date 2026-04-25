async function loadProducts() {
  const res = await fetch("data/products.json");
  const products = await res.json();

  const container = document.getElementById("product-list");

  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="images/${p.image_folder}/main.jpg">
        <h3>${p.name}</h3>
        <a href="chitiet.html?slug=${p.slug}">Xem chi tiết</a>
      </div>
    `;
  });
}

loadProducts();