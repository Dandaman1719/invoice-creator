let services = []
let amt = 0

const washBtn = document.getElementById("wash-car")
const mowBtn = document.getElementById("mow")
const weedBtn = document.getElementById("weed")
const invoiceBtn = document.getElementById("invoice-btn")
const serviceContainer = document.querySelectorAll(".services-container")
const totalAmount = document.querySelectorAll(".net-amount")


washBtn.addEventListener("click", function() {
  let newArr = addService('Wash Car', 10)
  totalCost()
  renderService(newArr)
})

function renderService(arr){
  serviceContainer.innerHTML = ""
 for(let i=0; i < arr.length; i++){
    serviceContainer.innerHTML  += `
    <div class="service-container">
      <p class="task-text"> ${arr[i].task}<p>
      <span>Remove</span>
      <p class="price-holder">$${arr[i].price}</p>
    </div>
    `
      totalAmt.innerHTML = `$${amt}`
 } 
}

function totalCost() {
  return amt
}