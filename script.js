const produkContainer = document.getElementById("produk-container");
if (produkContainer) {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => {
      const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
      data.forEach(item => {
        const div = document.createElement("div");
        div.className = "produk";
        div.innerHTML = `<h3>${item.name}</h3><p>Rp${item.price}</p><button>Tambah ke Keranjang</button>`;
        div.querySelector("button").addEventListener("click", () => {
          keranjang.push(item);
          localStorage.setItem("keranjang", JSON.stringify(keranjang));
          alert("Ditambahkan ke keranjang!");
        });
        produkContainer.appendChild(div);
      });
    });
}