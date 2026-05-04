const list=document.getElementById("list");
const search=document.getElementById("search");

function render(data){
list.innerHTML=data.map(p=>`
<div class="card">
<img src="${p.images[0]}">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<a class="btn" href="chitiet.html?slug=${p.slug}">Xem</a>
</div>`).join("");
}

render(products);

search.oninput=()=>{
const k=search.value.toLowerCase();
render(products.filter(p=>p.name.toLowerCase().includes(k)));
};
