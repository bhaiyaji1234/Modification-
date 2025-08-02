const products = [
  { name: "Clutch Plate", price: "₹1500", image: "images/clutch.jpg" },
  { name: "Car Battery", price: "₹4500", image: "images/battery.jpg" },
  { name: "Brake Pads", price: "₹800", image: "images/brake.jpg" }
];

const container = document.querySelector('.product-list');

products.forEach(p => {
  const card = document.createElement('div');
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button>Add to Cart</button>
  `;
  container.appendChild(card);
});
