// Load admin products
const adminProductList = document.getElementById("adminProductList");

function displayAdminProducts(){
adminProductList.innerHTML="";
products.forEach((p,index)=>{
adminProductList.innerHTML += `
<div class="bg-white p-4 rounded shadow">
<img src="${p.image}" class="h-48 w-full object-cover rounded mb-2">
<h3 class="font-semibold">${p.name}</h3>
<p class="text-blue-600">$${p.price}</p>
<button onclick="deleteProduct(${index})" class="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
</div>`;
});
}

function deleteProduct(index){
products.splice(index,1);
localStorage.setItem("products",JSON.stringify(products));
displayAdminProducts();
}

// Add Product
document.getElementById("addProductForm").addEventListener("submit", function(e){
e.preventDefault();
const name=document.getElementById("productName").value;
const price=parseFloat(document.getElementById("productPrice").value);
const image=document.getElementById("productImage").value;

products.push({id:products.length+1,name,price,image});
localStorage.setItem("products",JSON.stringify(products));
displayAdminProducts();
this.reset();
});

// Load saved products from localStorage if exists
if(localStorage.getItem("products")){
const savedProducts = JSON.parse(localStorage.getItem("products"));
products.length=0;
products.push(...savedProducts);
}

displayAdminProducts();