//example 1
document
.getElementById("changeTextButton")
.addEventListener('click',function() {
let para = document.getElementById("myParagraph")
para.textContent = "the para was changed"
})
 
//example 2

document
.getElementById("highlightFirstCity")
.addEventListener("click",function() {
    let highlight =document.getElementById("citiesList")
    highlight.firstElementChild.classList.add("highlight")
    
})

// example 3

  document.addEventListener("DOMContentLoaded", function () {

    const coffeeType = document.getElementById("coffeeType");
    const changeOrderBtn = document.getElementById("changeOrder");

    changeOrderBtn.addEventListener("click", function () {
      coffeeType.textContent = "Espresso";
    });

  });
