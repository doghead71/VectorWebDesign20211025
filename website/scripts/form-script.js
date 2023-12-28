function validateForm() {
    let enterName = document.forms["contactForm"]["fullname"].value;
    if (enterName == "") {
        alert("Please enter your name!");
        return false;
    }
    let enterEmail = document.forms["contactForm"]["email"].value;
    if (enterEmail == "") {
        alert("Please enter your email!");
        return false;
    }
    
    let enterMessage = document.forms["contactForm"]["message"].value;
    if (enterMessage == "") {
        alert("Please enter your message!");
        return false;
    }
    return true;
}