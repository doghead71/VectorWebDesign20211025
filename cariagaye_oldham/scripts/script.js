function validateForm() {

    let firstName = document.forms["contactForm"]["fname"].value;
    if (firstName == "") {
        alert("Please enter your first name!");
        return false;
    }

    let lastName = document.forms["contactForm"]["lname"].value;
    if (lastName == "") {
        alert("Please enter your last name!");
        return false;
    }
    
    let subjectText = document.forms["contactForm"]["subjecttext"].value;
    if (subjectText == "") {
        alert("Please enter your message!");
        return false;
    }

    let isTermsChecked = document.getElementById("termscheckbox").checked; /* = means 'to assign', == means 'equal to'*/
    if (!isTermsChecked) /*! means false, (isTermsChecked == false) means the same as (!isTermsChecked)*/{
        alert("Please accept the terms and conditions!");
        return false;
    }

    return true;
}