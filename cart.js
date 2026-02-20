let cart=JSON.parse(localStorage.getItem("cart"))||[];

function saveCart(){
localStorage.setItem("cart",JSON.stringify(cart));
updateCartCount();
}

function addToCart(id){
const product=products.find(p=>p.id===id);
const existing=cart.find(item=>item.id===id);

if(existing){
existing.quantity+=1;
}else{
cart.push({...product,quantity:1});
}

saveCart();
alert("Added to cart!");
}

function updateQuantity(id,change){
const item=cart.find(p=>p.id===id);
if(item){
item.quantity+=change;
if(item.quantity<=0){
cart=cart.filter(p=>p.id!==id);
}
saveCart();
location.reload();
}
}

function updateCartCount(){
const count=document.getElementById("cart-count");
if(count){
count.innerText=cart.reduce((sum,item)=>sum+item.quantity,0);
}
}

updateCartCount();