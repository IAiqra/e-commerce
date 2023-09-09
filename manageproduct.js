let uploadimg = () => {
  file.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    reader.onload = () => {
      loadimg.src = reader.result;
      loadimg.style.display = "block";
    };
  };

  file.click();
};






let products1 = [];
let show = () => {
  let html = `<section id="product1">`;
  for (i in products1) {
   html=html+`<div class="p-container"><img src="${products1[i].Image}" alt="" width="100%" /><p>${products1[i].PB}</p><h3>${products1[i].Pname}</h3><span id="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><br>$ ${products1[i].PP}</h2><span id="cart"><i class="fa-solid fa-cart-shopping fa-xs"><i><span></div>`;
  };
  html=html+`</section>`;
  document.getElementById("root").innerHTML = html;
};
show();



let addproduct = () => {
  let loadimg = document.getElementById("loadimg").src;
  let productBrand = document.getElementById("product-brand").value;
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;
  let data = {
    Image: loadimg,
    PB: productBrand,
    Pname: productName,
    PP: productPrice,
  };
  products1.push(data);
  show();
};