let cart_btn = document.getElementById("cart-btn")


let cart_itames = document.getElementById("cart_itames")

cart_btn.addEventListener("click", (e) => {
    cart_itames.classList.toggle("hidden")


})

//Total_price all
let Total_price = document.querySelector("#Total_price");
console.log(Total_price.innerText);

//counter_cart
let counter_cart = document.getElementById("counter_cart")
console.log(counter_cart);

// create list to store the products
let save_cart_items = []


//Buy button
let Buy_btns = document.querySelectorAll("#Buy_btn")

//loop over the Buy_btns
Buy_btns.forEach((Buy_btn) => {

    //make event each button
    Buy_btn.addEventListener("click", (e) => {
        //each btn it's parentElement


        //know if user wants to buy someting.
        let message =confirm('Do you want to buy this item.')
       
      


        console.log(message);
       



        if (message) {


           

            let parant_Elent = Buy_btn.parentElement;
            //gran ParantElemt the DIV of each btn
            let Big_parant_div = parant_Elent.parentElement;

            //create object all items
            let all_items = {
                id: Big_parant_div.querySelector("#product_id").value,
                image: Big_parant_div.querySelector("#image").getAttribute("src"),
                product_name: Big_parant_div.querySelector("#product_name").innerText,
                price: Big_parant_div.querySelector("#price").innerText.replace("$", ""),
                quantity: 1
            }

            //do not add in the cart 2 same itemes
            //ogoow sheygaan horay ma loogatay maya am haa
            let isIntheCart = save_cart_items.filter(item => item.id === all_items.id).length > 0;
            console.log(isIntheCart);

            if (!isIntheCart) { //if length <<1

                swal({
                    title: "Good job!",
                    text: `You have purchased a: ${all_items.product_name}!`,
                    icon: "success",
                    button: "Aww yiss!",
                  });

                AddItemsTotheCart(all_items)



            } else {
                // alert("You have already purchased this item.")
                swal(`You have already purchased this:  ${all_items.product_name}.!`);
                return
            }

            //sooqabo cart_item walbo oo div ah
            let Each_cart_div = cart_itames.querySelectorAll("#cart_item");
            console.log(Each_cart_div);

            //mid mid usooqabo div cart
            Each_cart_div.forEach(indivutual_div => {
                console.log(indivutual_div);
                //is item in the cart
                if (indivutual_div.querySelector("#product_id").value === all_items.id) {

                    console.log("yes are same");
                    //badi qauntity gas
                    IncreasItem(indivutual_div, all_items)
                    decreaseItem(indivutual_div, all_items)
                    RemoveItem(indivutual_div, all_items)
                }
            })

            //add last to the arrays
            save_cart_items.push(all_items)


            //calculate all Total_price each item
            Calculate_Total()
            console.log(save_cart_items.length);


        }
        // hadii uu cansel taabto user ka
        else{
            swal("Sorry!", "You have not purchase any item!");
        }

    })

})





// AddItemsTotheCart function

function AddItemsTotheCart(Itames) {
    cart_itames.insertAdjacentHTML("afterbegin", `
    

    <div id="cart_item" class="flex items-center justify-around border-b-2 border-[#008080] pb-4 mb-4">
    <input type="hidden" name="" id="product_id" value="${Itames.id}">
    <img src="${Itames.image}" alt="" class="h-20 w-20">
    <h4 class="text-xl">${Itames.product_name}</h4>
    <a href="#" id="small_btn_minus" class="bg-[#008080] text-white py-2 px-4 rounded cursor-pointer">&minus;</a>
    <h4   id="quantity" class="text-xl">${Itames.quantity}</h4>
    <a href="#" id="small_btn_plus"  action="increase" class="cursor-pointer bg-[#008080] text-white py-2 px-4 rounded ">&plus;</a>
    <span id="price" class="text-xl ">${Itames.price}</span>
    <a href="#" id="small_btn_remove" class="bg-[#ff1212] text-white py-2 px-4 rounded  font-semibold">&times;</a>
</div>
    
    `)

}





//calculation function

function Calculate_Total() {
    let Total = 0;
    save_cart_items.forEach(item => {
        Total += item.quantity * item.price;
        console.log(Total);
    })


    Total_price.innerText = Total;
    //How man itames i bought
    counter_cart.innerText = save_cart_items.length;


}



// Increasment function

function IncreasItem(indivutual_item, products_object) {
    indivutual_item.querySelector("#small_btn_plus").addEventListener("click", (e) => {
        console.log("alx it worked");
        console.log(indivutual_item.querySelector("#quantity").innerText);

        indivutual_item.querySelector("#quantity").innerText = ++products_object.quantity
        Calculate_Total()
    })


}




// decreaseItem function

function decreaseItem(indivutual_item, products_object) {
    indivutual_item.querySelector("#small_btn_minus").addEventListener("click", function() {
        if (products_object.quantity > 1) {
            indivutual_item.querySelector("#quantity").innerText = --products_object.quantity;

        } else {
            //remove in the cart and in the list
            save_cart_items = save_cart_items.filter(newElemts => newElemts.id !== products_object.id)
            indivutual_item.remove()
            console.log(save_cart_items);

        }

        Calculate_Total()
    })
}




// RemoveItem function


function RemoveItem(indivutual_item, products_object) {
    indivutual_item.querySelector("#small_btn_remove").addEventListener("click", function() {
        console.log("Remove");
        //Remove in the cart
        indivutual_item.remove()

        //Remove in array or list
        save_cart_items = save_cart_items.filter(newElemts => newElemts.id !== products_object.id)

        //add calculate fucntion
        Calculate_Total()
    })
}