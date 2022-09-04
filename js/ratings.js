const elForm = document.querySelector("#age-limit-form");

function store(event) {
    event.preventDefault();
    let limit = document.querySelector("#age-limit").value;
    console.log(limit);
    localStorage.setItem("age-limit", limit); // Store
}

elForm.addEventListener("submit", store);


function displayMessage(){
    let limit=localStorage.getItem("age-limit");
    document.getElementById("age-limit-form").innerHTML = "Ditt betyg " + limit;
}

var btn = document.getElementById("myBtn");
// add event listener for the button, for action "click"
btn.addEventListener("click", displayMessage);
