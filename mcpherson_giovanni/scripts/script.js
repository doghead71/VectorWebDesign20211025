function validateFrorm() {

    let firstName = document.forms["contactForm"]["fname"].value;
    if (firstName == "") {
        alert ("Please enter your first name!");
        return false;
    }

    let lastName = document.forms["contactForm"]["lname"].value;
    if (lastName == "") {
        alert ("Please enter your last name!");
        return false;
    }

    let subject = document.forms["contactForm"]["sujbect"].value;
    if (firstName == "") {
        alert ("Please enter your subject!");
        return false;
    }

    let isTermsChecked = document.getElementById("terms").checked;
    if (isTermsChecked == false) {
        alert ("Please accept the terms and conditions!");
        return false;
    }

    return true;

}