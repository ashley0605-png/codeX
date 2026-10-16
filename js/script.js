'use strict';
// External script. Event types: click, input, change, submit, mouseover, mouseout.
const dishes = [
  {
    "id": "item-1",
    "name": "Spanish Latte",
    "category": "Coffee",
    "price": 114,
    "image": "item-1",
    "badge": "COFFEE",
    "description": "Rich espresso with creamy, sweet milk.",
    "ingredients": "Espresso, milk or water, flavored syrup depending on selection. Milk-based options contain milk. Contains caffeine."
  },
  {
    "id": "item-2",
    "name": "White Mocha",
    "category": "Coffee",
    "price": 114,
    "image": "item-2",
    "badge": "COFFEE",
    "description": "A smooth coffee with white chocolate notes.",
    "ingredients": "Espresso, milk or water, flavored syrup depending on selection. Milk-based options contain milk. Contains caffeine."
  },
  {
    "id": "item-3",
    "name": "Caramel Latte",
    "category": "Coffee",
    "price": 114,
    "image": "item-3",
    "badge": "COFFEE",
    "description": "Espresso, milk, and a soft caramel finish.",
    "ingredients": "Espresso, milk or water, flavored syrup depending on selection. Milk-based options contain milk. Contains caffeine."
  },
  {
    "id": "item-4",
    "name": "Choco Mocha",
    "category": "Coffee",
    "price": 114,
    "image": "item-4",
    "badge": "COFFEE",
    "description": "Chocolate and coffee, perfectly paired.",
    "ingredients": "Espresso, milk or water, flavored syrup depending on selection. Milk-based options contain milk. Contains caffeine."
  },
  {
    "id": "item-5",
    "name": "Ice Americano",
    "category": "Coffee",
    "price": 114,
    "image": "item-5",
    "badge": "COFFEE",
    "description": "Espresso over ice for a bold, clean sip.",
    "ingredients": "Espresso, milk or water, flavored syrup depending on selection. Milk-based options contain milk. Contains caffeine."
  },
  {
    "id": "item-6",
    "name": "Ice Cappuccino",
    "category": "Coffee",
    "price": 114,
    "image": "item-6",
    "badge": "COFFEE",
    "description": "Espresso and milk with a light, airy finish.",
    "ingredients": "Espresso, milk or water, flavored syrup depending on selection. Milk-based options contain milk. Contains caffeine."
  },
  {
    "id": "item-7",
    "name": "Caramel Cappuccino",
    "category": "Frappe",
    "price": 114,
    "image": "item-7",
    "badge": "FRAPPE",
    "description": "A creamy ice-blended treat with caramel cappuccino flavor.",
    "ingredients": "Milk, ice, flavored syrup, whipped topping. Contains milk; Nutella contains hazelnut; cookie varieties contain wheat. Coffee and matcha varieties contain caffeine."
  },
  {
    "id": "item-8",
    "name": "Chocolate",
    "category": "Frappe",
    "price": 114,
    "image": "item-8",
    "badge": "FRAPPE",
    "description": "A creamy ice-blended treat with chocolate flavor.",
    "ingredients": "Milk, ice, flavored syrup, whipped topping. Contains milk; Nutella contains hazelnut; cookie varieties contain wheat. Coffee and matcha varieties contain caffeine."
  },
  {
    "id": "item-9",
    "name": "Nutella",
    "category": "Frappe",
    "price": 114,
    "image": "item-9",
    "badge": "FRAPPE",
    "description": "A creamy ice-blended treat with nutella flavor.",
    "ingredients": "Milk, ice, flavored syrup, whipped topping. Contains milk; Nutella contains hazelnut; cookie varieties contain wheat. Coffee and matcha varieties contain caffeine."
  },
  {
    "id": "item-10",
    "name": "Cookies n’ Cream",
    "category": "Frappe",
    "price": 114,
    "image": "item-10",
    "badge": "FRAPPE",
    "description": "A creamy ice-blended treat with cookies n’ cream flavor.",
    "ingredients": "Milk, ice, flavored syrup, whipped topping. Contains milk; Nutella contains hazelnut; cookie varieties contain wheat. Coffee and matcha varieties contain caffeine."
  },
  {
    "id": "item-11",
    "name": "Blueberry Matcha",
    "category": "Frappe",
    "price": 114,
    "image": "item-11",
    "badge": "FRAPPE",
    "description": "A creamy ice-blended treat with blueberry matcha flavor.",
    "ingredients": "Milk, ice, flavored syrup, whipped topping. Contains milk; Nutella contains hazelnut; cookie varieties contain wheat. Coffee and matcha varieties contain caffeine."
  },
  {
    "id": "item-12",
    "name": "Strawberry",
    "category": "Frappe",
    "price": 114,
    "image": "item-12",
    "badge": "FRAPPE",
    "description": "A creamy ice-blended treat with strawberry flavor.",
    "ingredients": "Milk, ice, flavored syrup, whipped topping. Contains milk; Nutella contains hazelnut; cookie varieties contain wheat. Coffee and matcha varieties contain caffeine."
  },
  {
    "id": "item-13",
    "name": "Caramel Mocha",
    "category": "Frappe",
    "price": 114,
    "image": "item-13",
    "badge": "FRAPPE",
    "description": "A creamy ice-blended treat with caramel mocha flavor.",
    "ingredients": "Milk, ice, flavored syrup, whipped topping. Contains milk; Nutella contains hazelnut; cookie varieties contain wheat. Coffee and matcha varieties contain caffeine."
  },
  {
    "id": "item-14",
    "name": "Coffee Milkshake",
    "category": "Milkshake",
    "price": 114,
    "image": "item-14",
    "badge": "MILKSHAKE",
    "description": "A smooth, creamy coffee milkshake.",
    "ingredients": "Milk, ice cream, flavored syrup or fruit. Contains milk; coffee and green tea contain caffeine."
  },
  {
    "id": "item-15",
    "name": "Green Tea Milkshake",
    "category": "Milkshake",
    "price": 114,
    "image": "item-15",
    "badge": "MILKSHAKE",
    "description": "A smooth, creamy green tea milkshake.",
    "ingredients": "Milk, ice cream, flavored syrup or fruit. Contains milk; coffee and green tea contain caffeine."
  },
  {
    "id": "item-16",
    "name": "Chocolate Milkshake",
    "category": "Milkshake",
    "price": 114,
    "image": "item-16",
    "badge": "MILKSHAKE",
    "description": "A smooth, creamy chocolate milkshake.",
    "ingredients": "Milk, ice cream, flavored syrup or fruit. Contains milk; coffee and green tea contain caffeine."
  },
  {
    "id": "item-17",
    "name": "Blueberry Milkshake",
    "category": "Milkshake",
    "price": 114,
    "image": "item-17",
    "badge": "MILKSHAKE",
    "description": "A smooth, creamy blueberry milkshake.",
    "ingredients": "Milk, ice cream, flavored syrup or fruit. Contains milk; coffee and green tea contain caffeine."
  },
  {
    "id": "item-18",
    "name": "Choco Banana Milkshake",
    "category": "Milkshake",
    "price": 114,
    "image": "item-18",
    "badge": "MILKSHAKE",
    "description": "A smooth, creamy choco banana milkshake.",
    "ingredients": "Milk, ice cream, flavored syrup or fruit. Contains milk; coffee and green tea contain caffeine."
  },
  {
    "id": "item-19",
    "name": "Mixed Berries Milkshake",
    "category": "Milkshake",
    "price": 114,
    "image": "item-19",
    "badge": "MILKSHAKE",
    "description": "A smooth, creamy mixed berries milkshake.",
    "ingredients": "Milk, ice cream, flavored syrup or fruit. Contains milk; coffee and green tea contain caffeine."
  },
  {
    "id": "item-20",
    "name": "Strawberry Milkshake",
    "category": "Milkshake",
    "price": 114,
    "image": "item-20",
    "badge": "MILKSHAKE",
    "description": "A smooth, creamy strawberry milkshake.",
    "ingredients": "Milk, ice cream, flavored syrup or fruit. Contains milk; coffee and green tea contain caffeine."
  },
  {
    "id": "item-21",
    "name": "Blueberry Refresher",
    "category": "Tea & Refreshers",
    "price": 114,
    "image": "item-21",
    "badge": "TEA & REFRESHERS",
    "description": "A chilled blueberry drink with a refreshing fruity finish.",
    "ingredients": "Ice, water, fruit-flavored syrup, citrus. Prepared in a shared kitchen."
  },
  {
    "id": "item-22",
    "name": "Blue Lemonade Refresher",
    "category": "Tea & Refreshers",
    "price": 114,
    "image": "item-22",
    "badge": "TEA & REFRESHERS",
    "description": "A chilled blue lemonade drink with a refreshing fruity finish.",
    "ingredients": "Ice, water, fruit-flavored syrup, citrus. Prepared in a shared kitchen."
  },
  {
    "id": "item-23",
    "name": "Grapes Refresher",
    "category": "Tea & Refreshers",
    "price": 114,
    "image": "item-23",
    "badge": "TEA & REFRESHERS",
    "description": "A chilled grapes drink with a refreshing fruity finish.",
    "ingredients": "Ice, water, fruit-flavored syrup, citrus. Prepared in a shared kitchen."
  },
  {
    "id": "item-24",
    "name": "Kiwi Refresher",
    "category": "Tea & Refreshers",
    "price": 114,
    "image": "item-24",
    "badge": "TEA & REFRESHERS",
    "description": "A chilled kiwi drink with a refreshing fruity finish.",
    "ingredients": "Ice, water, fruit-flavored syrup, citrus. Prepared in a shared kitchen."
  },
  {
    "id": "item-25",
    "name": "Lemonade Refresher",
    "category": "Tea & Refreshers",
    "price": 114,
    "image": "item-25",
    "badge": "TEA & REFRESHERS",
    "description": "A chilled lemonade drink with a refreshing fruity finish.",
    "ingredients": "Ice, water, fruit-flavored syrup, citrus. Prepared in a shared kitchen."
  },
  {
    "id": "item-26",
    "name": "Lime Refresher",
    "category": "Tea & Refreshers",
    "price": 114,
    "image": "item-26",
    "badge": "TEA & REFRESHERS",
    "description": "A chilled lime drink with a refreshing fruity finish.",
    "ingredients": "Ice, water, fruit-flavored syrup, citrus. Prepared in a shared kitchen."
  },
  {
    "id": "item-27",
    "name": "Lychee Refresher",
    "category": "Tea & Refreshers",
    "price": 114,
    "image": "item-27",
    "badge": "TEA & REFRESHERS",
    "description": "A chilled lychee drink with a refreshing fruity finish.",
    "ingredients": "Ice, water, fruit-flavored syrup, citrus. Prepared in a shared kitchen."
  },
  {
    "id": "item-28",
    "name": "Strawberry Refresher",
    "category": "Tea & Refreshers",
    "price": 114,
    "image": "item-28",
    "badge": "TEA & REFRESHERS",
    "description": "A chilled strawberry drink with a refreshing fruity finish.",
    "ingredients": "Ice, water, fruit-flavored syrup, citrus. Prepared in a shared kitchen."
  },
  {
    "id": "item-29",
    "name": "Grilled Cheese Toast",
    "category": "Sandwiches & Toasts",
    "price": 149,
    "image": "item-29",
    "badge": "SANDWICHES & TOASTS",
    "description": "Golden toasted bread with a comforting cheese filling.",
    "ingredients": "Bread, butter, cheese. Contains wheat and milk."
  },
  {
    "id": "item-30",
    "name": "Chicken Club Sandwich",
    "category": "Sandwiches & Toasts",
    "price": 189,
    "image": "item-30",
    "badge": "SANDWICHES & TOASTS",
    "description": "A hearty toasted sandwich for your café break.",
    "ingredients": "Bread, chicken, lettuce, tomato, mayonnaise. Contains wheat and egg."
  },
  {
    "id": "item-31",
    "name": "Golden Fries",
    "category": "Finger Foods",
    "price": 99,
    "image": "item-31",
    "badge": "FINGER FOODS",
    "description": "Crisp potato fries, lightly seasoned.",
    "ingredients": "Potatoes, vegetable oil, salt. Prepared in a shared kitchen."
  },
  {
    "id": "item-32",
    "name": "Pesto Pasta",
    "category": "Pasta",
    "price": 229,
    "image": "item-32",
    "badge": "PASTA",
    "description": "Basil pesto, tomatoes, and a cozy bowl of pasta.",
    "ingredients": "Pasta, basil pesto, tomato, parmesan. Contains wheat, milk, tree nuts."
  },
  {
    "id": "item-33",
    "name": "Creamy Chicken Rice",
    "category": "Rice Meals",
    "price": 219,
    "image": "item-33",
    "badge": "RICE MEALS",
    "description": "A sample rice meal with chicken and creamy sauce.",
    "ingredients": "Rice, chicken, cream sauce. Contains milk. Image is illustrative."
  },
  {
    "id": "item-34",
    "name": "Chocolate Cake",
    "category": "Cakes & Desserts",
    "price": 159,
    "image": "item-34",
    "badge": "CAKES & DESSERTS",
    "description": "A rich chocolate slice to make the day sweeter.",
    "ingredients": "Flour, cocoa, eggs, butter, sugar. Contains wheat, egg, milk."
  }
];
const byId = id => document.getElementById(id);
const money = value => new Intl.NumberFormat('en-PH',{style:'currency',currency:'PHP'}).format(value);
let cart = {};
let category = new URLSearchParams(window.location.search).get('category') || 'All';
const beverageCategories = ['Coffee', 'Frappe', 'Milkshake', 'Tea & Refreshers'];
if (!['Beverages','Food'].includes(category) && !dishes.some(dish => dish.category === category)) category = 'All';
let toastTimer;
function showToast(message) {
 byId('toast').textContent=message;
 byId('toast').classList.add('visible');
 clearTimeout(toastTimer);
 toastTimer=setTimeout(()=>byId('toast').classList.remove('visible'),2500);
}
function createCard(dish) {
 const card=document.createElement('article');
 card.className='food-card';
 card.innerHTML=`<div class="food-image"><img src="images/${dish.image}.png" alt="${dish.name}" loading="lazy"><span class="food-badge">${dish.badge}</span></div><div class="food-title"><h3>${dish.name}</h3><strong class="price">${money(dish.price)}</strong></div><p>${dish.description}</p><div class="card-bottom"><button class="ingredient-button" aria-expanded="false" aria-controls="ingredients-${dish.id}">Ingredients & allergens</button><button class="add-button" data-add="${dish.id}" aria-label="Add ${dish.name} to bag">Add to bag +</button></div><p class="ingredients" id="ingredients-${dish.id}" hidden>${dish.ingredients}</p>`;
 return card;
}
function renderMenu() {
 const grid=byId('menu-grid');
 if(!grid) return;
 const term=byId('menu-search').value.trim().toLowerCase();
 const sort=byId('menu-sort').value;
 const filtered=dishes.filter(dish=>(category==='All'||dish.category===category||(category==='Beverages'&&beverageCategories.includes(dish.category))||(category==='Food'&&!beverageCategories.includes(dish.category)))&&`${dish.name} ${dish.description} ${dish.ingredients}`.toLowerCase().includes(term));
 if(sort!=='featured') filtered.sort((a,b)=>sort==='low'?a.price-b.price:b.price-a.price);
 grid.replaceChildren(...filtered.map(createCard));
 byId('results-count').textContent=`${filtered.length} dish${filtered.length===1?'':'es'} to love`;
 byId('empty-state').hidden=filtered.length>0;
 byId('category-heading').textContent=category==='All'?'All items':category;
}
function toggleIngredients(button,show) {
 byId(button.getAttribute('aria-controls')).hidden=!show;
 button.setAttribute('aria-expanded',String(show));
}
function addToCart(id) {
 cart[id]=(cart[id]||0)+1;
 renderCart();
 showToast(`${dishes.find(dish=>dish.id===id).name} added to your bag`);
}
function renderCart() {
 const items=byId('cart-items');
 items.replaceChildren();
 let count=0,total=0;
 for(const [id,quantity] of Object.entries(cart)) {
  const dish=dishes.find(item=>item.id===id);
  count+=quantity; total+=quantity*dish.price;
  const row=document.createElement('article');
  row.className='cart-row';
  row.innerHTML=`<img src="images/${dish.image}.png" alt=""><div><h3>${dish.name}</h3><div class="quantity"><button data-adjust="${id}" data-delta="-1" aria-label="Remove one ${dish.name}">−</button><span>${quantity}</span><button data-adjust="${id}" data-delta="1" aria-label="Add one ${dish.name}">+</button></div></div><strong>${money(quantity*dish.price)}</strong>`;
  items.append(row);
 }
 if(!count) items.textContent='Your bag is waiting for something delicious.';
 if (byId('cart-count')) byId('cart-count').textContent=count;
 byId('cart-total').textContent=money(total);
 byId('checkout-button').disabled=count===0;
}
function openCart() {
 byId('order-form').hidden=false;
 byId('order-success').hidden=true;
 byId('cart-dialog').showModal();
}
function toggleTheme() {
 const dark=document.body.classList.toggle('dark');
 byId('theme-toggle').textContent=dark?'☀':'☾';
 byId('theme-toggle').setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
 // Visible style-property change, alongside textContent/innerHTML changes elsewhere.
 byId('theme-toggle').style.backgroundColor=dark?'#425449':'transparent';
}
function updateOrderType() {
 byId('order-note').textContent=byId('order-type').value==='Takeaway'?'We’ll pack your meal for pickup.':'We’ll prepare your order for your table.';
}
function submitOrder(event) {
 event.preventDefault();
 if(!Object.keys(cart).length) return;
 const input=byId('customer-name');
 const name=input.value.trim();
 if(!name) { input.setCustomValidity('Please enter your name.'); input.reportValidity(); return; }
 const total=Object.entries(cart).reduce((sum,[id,qty])=>sum+dishes.find(dish=>dish.id===id).price*qty,0);
 const success=byId('order-success');
 // User input is inserted as plain text, never HTML.
 success.textContent=`Thanks, ${name}! Your ${byId('order-type').value.toLowerCase()} demo order (${money(total)}) is confirmed. No real order or payment was sent.`;
 success.hidden=false;
 byId('order-form').hidden=true;
 cart={}; renderCart();
 byId('order-form').reset(); updateOrderType();
}
byId('favorites-grid')?.replaceChildren(...[dishes[0],dishes[8],dishes[dishes.length-1]].map(createCard));
document.querySelectorAll('[data-category]').forEach(button=>{
 button.classList.toggle('active',button.dataset.category===category);
 button.setAttribute('aria-pressed',String(button.dataset.category===category));
});
renderMenu(); renderCart();
byId('theme-toggle')?.addEventListener('click',toggleTheme);
byId('cart-toggle')?.addEventListener('click',openCart);
byId('cart-close').addEventListener('click',()=>byId('cart-dialog').close());
byId('menu-search')?.addEventListener('input',renderMenu);
byId('menu-sort')?.addEventListener('change',renderMenu);
byId('order-type').addEventListener('change',updateOrderType);
byId('order-form').addEventListener('submit',submitOrder);
byId('customer-name').addEventListener('input',event=>event.target.setCustomValidity(''));
document.addEventListener('click',event=>{
 const add=event.target.closest('[data-add]');
 if(add) addToCart(add.dataset.add);
 const adjust=event.target.closest('[data-adjust]');
 if(adjust) {
  const id=adjust.dataset.adjust;
  cart[id]+=Number(adjust.dataset.delta);
  if(cart[id]<=0) delete cart[id];
  renderCart();
 }
 const filter=event.target.closest('[data-category]');
 if(filter) {
  category=filter.dataset.category;
  document.querySelectorAll('[data-category]').forEach(button=>{
   button.classList.toggle('active',button===filter);
   button.setAttribute('aria-pressed',String(button===filter));
  });
  renderMenu();
 }
 const ingredient=event.target.closest('.ingredient-button');
 if(ingredient) {
  const show=ingredient.dataset.pinned!=='true';
  ingredient.dataset.pinned=String(show);
  toggleIngredients(ingredient,show);
 }
});
// Hover previews ingredients. Click pins them open for touch and keyboard users.
document.addEventListener('mouseover',event=>{
 const button=event.target.closest('.ingredient-button');
 if(button) toggleIngredients(button,true);
});
document.addEventListener('mouseout',event=>{
 const button=event.target.closest('.ingredient-button');
 if(button&&!button.contains(event.relatedTarget)&&button.dataset.pinned!=='true') toggleIngredients(button,false);
});

// Footer and contact actions remain local classroom demonstrations.
document.querySelectorAll('[data-delivery]').forEach(button => button.addEventListener('click', () => showToast(button.dataset.delivery + ' ordering is not connected in this demo.')));
document.querySelectorAll('[data-social]').forEach(button => button.addEventListener('click', () => showToast('No official ' + button.dataset.social + ' account has been added yet.')));
byId('contact-form')?.addEventListener('submit', event => {
 event.preventDefault();
 byId('contact-feedback').textContent = 'Thank you! Your demo message is complete. No message was sent.';
 event.target.reset();
});
