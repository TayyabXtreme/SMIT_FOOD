console.log("order details")
var orderkey = localStorage.getItem("Current_order_detail")
var order_details = document.getElementById("order_details")
var username = document.getElementById("name")
var price = document.getElementById("price")
var statusoRDER = document.getElementById("status")
var loder =document.getElementById("loader")
function GetCurrentOrder(){

    firebase.database().ref("allorders").child(orderkey)
    .get()
    .then((snap)=>{
        console.log(snap.val())
        username.innerText = "User NAME " + snap.val()["userName"]
        price.innerText = "price " + snap.val()["total_amount"]
        statusoRDER.innerText = "Status " + snap.val()["status"]
      
        for(var data of snap.val()["dishes"])
        {
            order_details.innerHTML+=`
           


          <div class="col col-lg-4" style="width:334px;margin-bottom:15px;font-size:1em" >
          <div class="card text-center" style="background:none !important;border:1px solid gold;color:white" >
          <img src=${data["dish_image"]} style="border-bottom:1px solid white;height:300px;">
          <div class="card-body">
          <h5 class="card-title">Category  <span style="color:gold;display:inline-block">${data["category_name"]} </span></h5>
            <h5 class="card-title">Dish <span style="color:gold;display:inline-block">${data["dish_name"]} </span></h5>
            <p class="card-text"> Price : <span style="color:gold;display:inline-block">${data["dish_price"]}</span></p>
            <p class="card-text">Qunatity  <span style="color:gold;display:inline-block">: ${data["quantity"]}</span></p>
  
            </div>
          </div>
        </div>
            
            `
        }
        loder.style.display="none"
        
    })
    .catch((e)=>{
        console.log(e)
    })
}
GetCurrentOrder()


{/* <div class="col col-lg-4" >
<div class="card text-center" >
<img src=${data["dish_image"]}>
<div class="card-body">
<h5 class="card-title">Category Name ${data["category_name"]} </h5>
  <h5 class="card-title">Dish Name ${data["dish_name"]} </h5>
  <p class="card-text">Dish Price : ${data["dish_price"]}</p>
  <p class="card-text">Qunatity  : ${data["quantity"]}</p>

  </div>
</div>
</div> */}