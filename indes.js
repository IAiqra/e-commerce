let nav=document.getElementById('nav');
let bar=document.getElementById('bar');
let close=document.getElementById('close');
bar.addEventListener('click',()=>{
    if(bar){
        nav.classList.add('showhide');
    }
});
close.addEventListener('click',()=>{
    if(close){
        nav.classList.remove('showhide');
    }
});

let products=[];
let show_product=()=>{
    let html=``;
    for(i in products){
        html=html+` <div class="p-container">
        <img src="./images/Isolated_white_t-shirt_front.jpg" alt="">
        <p>adidas</p>
        <h3>Cartoon Astronout T-Shirts</h3>
        <span id="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </span>
        <h2>78$</h2>
        <span id="cart">
            <i class="fa-solid fa-cart-shopping fa-beat fa-xs"></i>
            
        </span>
    </div>`;
    }
}
