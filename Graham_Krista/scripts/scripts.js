function validateForm() {
    let firstName = document.forms["contactForm"] ["fname"].value;
    if (firstName == "") {
        alert("please enter your first name!");
        return false;
    }

    let lastName = document.forms["contactForm"] ["lname"].value;
    if (lastName == "") {
        alert("please enter your last name!");
        return false;
    }

    let Subject = document.forms["contactForm"] ["subject"].value;
    if (subject == "") {
        alert("please enter subject!");
        return false;
    }

    
    let isTermsChecked = document.getElementById("terms").Checked;
    if (isTermsChecked == false) {
        alert("please accept the terms and conditions!");
        return false;
    }

    return true;

}