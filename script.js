var products = [
{name: "Brown chair", headline: "Super Softy", price: "14,999", image: "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name: "Black chair", headline: "Durable Plastic", price: "8,999", image: "https://images.unsplash.com/photo-1489269637500-aa0e75768394?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name: "Creame Color Chair", headline: "Professional", price: "12,999", image: "https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name: "Cushion Sofa", headline: "Comfortable Sofa", price: "24,999", image: "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name: "King Chair", headline: "Traditional Singhasan", price: "34,999", image: "https://plus.unsplash.com/premium_photo-1683120975679-dbca0a428106?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{ name: "Wooden Chair", headline: "Traditional Relaxation", price: "5,999", image: "https://plus.unsplash.com/premium_photo-1681449856638-2b3af48f902c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];
var popular = [
    {name: "Cushion Sofa", headline: "Comfortable Sofa", price: "24,999", image: "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name: "WareRoom hair", headline: "Steel Rod Fitted", price: "3,999", image: "https://images.unsplash.com/photo-1530411554903-7e745b9f1f6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name: "King Chair", headline: "Traditional Singhasan", price: "34,999", image: "https://plus.unsplash.com/premium_photo-1683120975679-dbca0a428106?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{ name: "Wooden Chair", headline: "Traditional Relaxation", price: "5,999", image: "https://plus.unsplash.com/premium_photo-1681449856638-2b3af48f902c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

];

var cart = [];

function addProduct(){
    var clutter = "";
products.forEach(function(product,index){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object cover" src= "${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}.</h3>
                            <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                        </div>
                        <button data-index="${index}" class =" add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
})

document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
                    </div>
                </div>`;

    });

    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){

        if(details.target.classList.contains('add')){
           cart.push(products[details.target.dataset.index])
           alert("Product added to Cart.")

        }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function(product,index){
            clutter += `<div class=" flex gap-2 bg-white p-2 rounded-lg">
                    <div class=" w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                        <img class="w-full h-full object-cover" src="${product.image}" />
                    </div>
                    <div>
                        <h3 class="font-semibold">${product.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">&#8377; ${product.price}</h5>
                    </div>
                </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

showCart();
addToCart();
addProduct();
addPopularProducts();