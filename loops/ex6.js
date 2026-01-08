
//1. Write a for loop that loops through the array ["green tea", 
//"black tea", "Chai", "oolong tea"] and stops the loop when it finds "chai".
// Store all teas before "chai" in a new array named "selectedTeas"

var array = ["green tea","black tea", "Chai", "oolong tea"]
var selectedTeas =[]
for (let i = 0; i < array.length; i++) {
     if(array[i]=="Chai")
     {
        break;
     }
    selectedTeas.push(array[i])
}
console.log(selectedTeas)
