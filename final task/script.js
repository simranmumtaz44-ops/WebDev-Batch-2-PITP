const foods=[
 {name:"Breakfast",img:"images/breakfast.jpg"},
 {name:"Lunch",img:"images/lunch.jpg"},
 {name:"Pasta ⭐ Favorite (Discount)",img:"images/pasta.jpg"},
 {name:"Dinner",img:"images/dinner.jpg"},
 {name:"Special Dish",img:"images/special.jpg"},
 {name:"Drinks",img:"images/drink.jpg"},
];

let box=document.getElementById("menu");
if(box){
 foods.forEach(f=>{
  box.innerHTML+=`
   <div class="card">
    <img src="${f.img}" style="width:100%">
    <h3>${f.name}</h3>
   </div>`;
 });
}

function member(){
 document.getElementById("msg").innerText=
 "Membership activated! Discount applied 🎉";
 return false;
}
function reserve(){
 document.getElementById("msg").innerText=
 "Reservation successful! See you soon 🍽️";
 return false;
}