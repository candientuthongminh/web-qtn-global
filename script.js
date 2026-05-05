const container = document.getElementById("product-list");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="images/${p.image_folder}/main.jpg"
           onerror="this.src='images/${p.image_folder}/1.jpg'">

      <h3>${p.name}</h3>

      <a href="chitiet.html?slug=${p.slug}" class="btn">Chi tiết</a>
    </div>
  `;
});
