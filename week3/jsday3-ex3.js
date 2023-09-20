const SERVER_URL = "http://localhost:8080/api/cars"


/*
    Show all cars or members
*/
document.getElementById("btn-get-all").addEventListener("click", getAllCars)
document.getElementById("btn-find-car").addEventListener("click", getACar)


function getAllCars(){
    fetch(SERVER_URL)
        .then(res => res.json())
        .then(cars => {
            const tableRows = cars.map(car => `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePrDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
            `)
            const rowsAsStr = tableRows.join("");
            document.getElementById("tbody").innerHTML = rowsAsStr;
        })
}

/*
    Find a single car or member
*/


function getACar(){
    const id = document.getElementById("text-for-id").value
    fetch(SERVER_URL + "/" + id)
        .then(res => {
            if(!res.ok){
                return alert("Car Not Found");
            }
            return res.json()

        })
        .then(car => {
            document.getElementById("found-car").innerText = JSON.stringify(car, null, 2)
        })
}

  

