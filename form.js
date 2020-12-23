// Create object to store data inputs in

var fields = {};

document.addEventListener("DOMContentLoaded", function () {
    fields.formName = document.querySelector("#formName");
    fields.email = document.querySelector("#formEmail");
    fields.newsletter = document.querySelector("#formNewsletter");
    fields.question = document.querySelector("#formQuestion");
})

// Check is the value is empty or not for name and question 
function isNotEmpty(value) {
    if (value == null || typeof value == "undefined") return false;

    return (value.length > 0);

}

// Validates email 
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLocaleLowerCase());
}

/* Creates fields validation  */
function fieldValidation(field, validationFunction) {
    if (field == null) return false;
    let isFieldValid = validationFunction(field.value)

    return isFieldValid;
}


//isValid combines all checks and validations (isNotEmpty & isEmail) above and is used as validation in sendContact()
function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.formName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);

    return valid;
}

// constructor so function sendContact can show personalized message in alert
class User {
    constructor(formName, email, newsletter, question) {
        this.firstName = formName;
        this.email = email;
        this.newsletter = newsletter;
        this.question = question;
    }
}

// function in button to send form and showing alerts for either error or success based on validated data - isValid
function sendContact() {
    if (isValid()) {
        let usr = new User(formName.value, formEmail.value, formNewsletter
            .checked, formQuestion.value);

        alert(`${usr.firstName} thanks for contacting us! `)
    } else {
        alert("There was an error");
    }
}

