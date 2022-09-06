const elForm = document.querySelector("#rating-form");
const elScore = document.querySelector("#score");

function store(event) {
    event.preventDefault();
    let limit = document.querySelector("#rating").value;
    console.log(limit);
    if (limit != null) {
        localStorage.setItem("rating", limit); // Store
        displayMessage();
    }
}

elForm.addEventListener("submit", store);


function displayMessage() {

    let limit = localStorage.getItem("rating");
    if (limit) {
        elScore.textContent = `Ditt betyg ${limit}`;
    }
}

let btn = document.getElementById("myBtn");
btn.addEventListener("click", displayMessage);
