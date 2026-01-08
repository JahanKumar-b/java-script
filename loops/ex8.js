//3.Use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and then stop when the number
//'4' is found. Store the numbers before '4' in an array named 'smallNumbers'.

var num = [1,2,3,4,5]
var smallNumbers =[]
for (const i of num) {
    if(i==4)
    {
        break;
    }
    smallNumbers.push(i)
}
console.log(smallNumbers)
