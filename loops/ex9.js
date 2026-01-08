//4. Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea",
//"black tea"] and skip "herbal tea". sStore the other teas in an array named "preferredTeas"

var array = ["chai", "green tea", "herbal tea","black tea"]
var preferredTeas =[]
for (const i of array) {
    if(i=="herbal tea")
    {
        continue;
    }
    preferredTeas.push(i)
}
console.log(preferredTeas)
