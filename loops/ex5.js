//6. Write a for loop that lists all the cities in thje array ["Paris", "new york", "tokyo"
// "London"] and stores each city in a new array named 'cityList'.

var cities = ["Paris", "new york", "tokyo","London"]
var cityList = []
for (let i = 0; i < cities.length; i++) {
    cityList.push(cities[i])
    
}
console.log(cityList)
