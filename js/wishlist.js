const elForm = document.querySelector('#grader');
const elemail = document.querySelector('#email');
const elFormOutput = document.querySelector('#formOutput');


function wish(event) {

    let email = elemail.value;
    function validateForm() {
        let x = document.forms["myForm"]["email"].value;
    }

    event.preventDefault();
    console.log(email);

    elFormOutput.textContent = `${elemail} `;

}

elForm.addEventListener('submit', wish);

