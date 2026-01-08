//5. Write a for loop that multiplies each element in the array [2,4,6] by 2 and stores
//the results in a new array named 'multipliedNumbers'

var array =[2,4,6]
var multipliedNumbers=[]
for (let i = 0; i < array.length; i++) {
    multipliedNumbers.push(array[i]*2)
}
console.log(multipliedNumbers)
