const container = document.getElementById("product-list");
const searchInput = document.getElementById("search");

function render(list){
  container.innerHTML = list.map(p => `
    <div class="card">
      <img src="${p.images[0]}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <a href="chitiet.html?slug=${p.slug}" class="btn">Xem chi tiết</a>
    </div>
  `).join("");
}

render(products);

searchInput.addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  render(filtered);
});
