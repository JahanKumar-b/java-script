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