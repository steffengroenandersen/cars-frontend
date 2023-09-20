const SERVER_URL = "http://localhost:8080/api/cars"


/*

fetch(SERVER_URL)
    .then((response) => response.json())
    .then(data => console.log(data))

*/

// Create new car
const newCar = {
    "brand": "Toyota",
    "model": "RAV",
    "pricePrDay": 500,
    "bestDiscount": 25
}

// Set REST options for fetch method
const options = {
    method: "POST",
    headers: {"Content-Type":"application/json",},
    body: JSON.stringify(newCar)
}

// Fetch method that in this case posts a car
fetch(SERVER_URL, options)
    .then(res => res.json())
    .then(carResponse => console.log(carResponse))
