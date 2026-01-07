function enterWebsite() {
  document.getElementById("splash").style.display = "none";
  document.getElementById("website").style.display = "block";
}

const foods = [
  {name:"Pancakes", price:420, cat:"breakfast", img:"https://source.unsplash.com/400x300/?pancakes"},
  {name:"Omelette", price:300, cat:"breakfast", img:"https://source.unsplash.com/400x300/?omelette"},

  {name:"Chicken Burger", price:650, cat:"lunch", img:"https://source.unsplash.com/400x300/?burger"},
  {name:"Club Sandwich", price:550, cat:"lunch", img:"https://source.unsplash.com/400x300/?sandwich"},

  {name:"🍝 Macaroni", price:750, cat:"dinner", img:"https://source.unsplash.com/400x300/?macaroni,pasta"},
  {name:"BBQ Platter", price:1600, cat:"dinner", img:"https://source.unsplash.com/400x300/?bbq"},

  {name:"Cold Coffee", price:380, cat:"drinks", img:"https://source.unsplash.com/400x300/?cold-coffee"},
  {name:"Mint Margarita", price:320, cat:"drinks", img:"https://source.unsplash.com/400x300/?mocktail"},
];

// auto 50+
while (foods.length < 50) {
  foods.push({
    name:"Chef Special",
    price:500 + Math.floor(Math.random()*700),
    cat:["breakfast","lunch","dinner","drinks"][Math.floor(Math.random()*4)],
    img:"https://source.unsplash.com/400x300/?food,meal"
  });
}

function card(item) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${item.img}">
        <div class="card-body">
          <h5>${item.name}</h5>
          <p>Rs. ${item.price}</p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  `;
}

foods.forEach(f => {
  if (f.cat === "breakfast") breakfastItems.innerHTML += card(f);
  if (f.cat === "lunch") lunchItems.innerHTML += card(f);
  if (f.cat === "dinner") dinnerItems.innerHTML += card(f);
  if (f.cat === "drinks") drinkItems.innerHTML += card(f);
});
