const elForm = document.querySelector("#rating-form");

function store(event) {
    event.preventDefault();
    let limit = document.querySelector("#rating").value;
    console.log(limit);
    if(limit !=null){
    localStorage.setItem("rating", limit); // Store
}}

elForm.addEventListener("submit", store);


function displayMessage(){
    let limit=localStorage.getItem("rating");
    document.getElementById("rating-form").innerHTML = "Ditt betyg " + limit;
}

let btn = document.getElementById("myBtn");
btn.addEventListener("click", displayMessage);
