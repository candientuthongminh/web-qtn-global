async function loadProducts(){
  const res = await fetch("products.json")
  const data = await res.json();

  const list = document.getElementById("productList");
  const menu = document.getElementById("menuProducts");

  data.forEach(p => {
    list.innerHTML += `
      <div class="product" onclick="goDetail(${p.id})">
        <img src="${p.image}">
        <p>${p.name}</p>
      </div>
    `;
    menu.innerHTML += `<div onclick="goDetail(${p.id})">${p.name}</div>`;
  });
}

function goDetail(id){
  window.location.href = "product.html?id=" + id;
}

loadProducts();
