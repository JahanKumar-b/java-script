//2.Write a for loop that loops through the array ["London", "New york", "Paris", "Berlin"]
//and skips "Paris". Store the other cities in a new array named "visitedCities".

var cities = ["London", "New york", "Paris", "Berlin"]
var visitedCities =[]
for (let i = 0; i < cities.length; i++) {
    if(cities[i]=="Paris")
        {
            continue;
        }
        visitedCities.push(cities[i])
}
console.log(visitedCities)
