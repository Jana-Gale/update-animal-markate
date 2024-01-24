$("#newProduct").click(function(){
    console.log('yes welcome');
    $('#display-modal').modal("show")
})


// input image file
let input_img=document.querySelector("#img");
//display-image
let display_img=document.getElementById("display-img")
console.log(display_img);


//event input-img
input_img.addEventListener("change",()=>{
    display_img.src=URL.createObjectURL(input_img.files[0])
    console.log(display_img);
})

console.log(display_img.src);



//select all inputs
let image=$("#img");
let P_name=$("#p-name");
let Desc=$("#desc");
let price=$("#price");



//row div

let rows_products=$("#rows_products");
console.log(rows_products);

function display_product(sawir,Pro_name,descrip,price){
rows_products.append(`

<div class="col-lg-4 col-md-6 col-sm-12 my-3 ">
<!-- card product -->
<div class="card p-2 shadow-lg" style="width: 25rem;" id=""card>
  <img src="${sawir}" class="card-img-top" id="sawir"  style="height: 250px;">
  <div class="card-body">
    <h5 class="card-title">${Pro_name}</h5>
    <div class="d-flex justify-content-between">
      <p class="card-text">${descrip}</p>
      <p class="card-text fs-4 text-primary">$${price}</p>
     </div>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>

</div>


`)




}





$("#form-product").submit(function(event){
    event.preventDefault();
    display_product(display_img.src,P_name.val(),Desc.val(),price.val())
   
  

    $("#form-product")[0].reset()


   
   
   
})




















