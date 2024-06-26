
var orderkey = localStorage.getItem("current_order")
var order_details = document.getElementById("order_details")
var username = document.getElementById("name")
var price = document.getElementById("price")
var statusoRDER = document.getElementById("status")
var loder =document.getElementById("loader")
var userId = localStorage.getItem("userId")
function GetCurrentOrder(){

    firebase.database().ref("userorders").child(userId).child(orderkey)
    .get()
    .then((snap)=>{
        
        // username.innerText = "" + snap.val()["userName"]
        // price.innerText = "Total price : " + snap.val()["total_amount"]
        // statusoRDER.innerText = "Status " + snap.val()["status"]
      
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

if(localStorage.getItem("userId")==null){

  window.location.replace("../../Auth/index.html")


}


function logout(){
  localStorage.clear()
  window.location.replace("../../index.html")
}