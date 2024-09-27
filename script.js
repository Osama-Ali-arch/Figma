
let slideIndex = 1;
var emailarray = [];
var passwordarray = [];
var size = 0 ; 

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("fa-circle-o");

    if (n > slides.length) 
    {
        slideIndex = 1;
    }    
    if (n < 1) 
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
// document.getElementById("create").addEventListener("click" , function(){
//     create_account();
// });
let emailValid = false;
let passwordValid = false;
let confirmPasswordValid = false;
let usernamevalid = false;

function validateusername(){
    let user = document.getElementById("uname").value.trim();
    let warning = document.getElementById("userwarning");
    let name_pattern = /^[a-z A-Z\-]+$/;

    if(!user){
        warning.style.display = "block";
        warning.innerHTML = " * UserName is Required ";
        warning.style.color = "red";
        usernamevalid = false;
    }
    else if(!name_pattern.test(user)){
        warning.style.display = "block";
        warning.innerHTML = "Username Should inlcude only A-Z and a-z ";
        warning.style.color = "red";
        usernamevalid = false;
    }
    else{
        warning.style.display = "none";
        document.getElementById("uname").style.borderColor = "black";
        usernamevalid = true;
    }
    // toggleSubmitButton();

}

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
    let warning = document.getElementById("warning");

    if (emailarray.includes(email)) {
        warning.style.display = "block";
        warning.innerHTML = "This email is already registered. Please use a different email.";
        warning.style.color = "red";
        emailValid = false;
    }
    else if (!email) {
        warning.style.display = "block";
        warning.innerHTML = "* Email is required";
        warning.style.color = "red";
        document.getElementById("email").style.borderColor = "red"; 
        emailValid = false;
    } 
    else if (!emailPattern.test(email)) {
        warning.style.display = "block";
        warning.innerHTML = "* Enter a valid email address";
        warning.style.color = "red";
        emailValid = false;
    } 
    else {
        warning.style.display = "none";
        document.getElementById("email").style.borderColor = "black";
        emailValid = true;
    }

    // toggleSubmitButton();
}

function validatePassword() {
    let password = document.getElementById("password").value.trim();
    let upperCaseLetters = /[A-Z]/g;
    let lowerCaseLetters = /[a-z]/g;
    let number = /[0-9]/g;
    let warning = document.getElementById("warningp");

    document.getElementById("character").style.color = password.length >= 8 ? "green" : "red";
    document.getElementById("uppercase").style.color = password.match(upperCaseLetters) ? "green" : "red";
    document.getElementById("lowercase").style.color = password.match(lowerCaseLetters) ? "green" : "red";
    document.getElementById("digit").style.color = password.match(number) ? "green" : "red";

    if (!password) {
        warning.style.display = "block";
        warning.innerHTML = "* Password is required";
        warning.style.color = "red";
        document.getElementById("password").style.borderColor = "red"; 
        passwordValid = false;
    } 
        // else if (password.length < 8 || !password.match(upperCaseLetters) || !password.match(lowerCaseLetters) || !password.match(number)) {
        //     warning.style.display = "block";
        //     warning.innerHTML = "* Please meet the password requirements";
        //     warning.style.color = "red";
        //     passwordValid = false;
    else {
        warning.style.display = "none";
        document.getElementById("password").style.borderColor = "black";
        passwordValid = true;
    }

    // toggleSubmitButton();
}

function validateConfirmPassword() {
    let confirmPassword = document.getElementById("Confirm").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmWarning = document.getElementById("confirm-warning");
    document.getElementById("Passwordc").style.color = (password === confirmPassword) ? "green" : "red";

    if (!confirmPassword) {
        confirmWarning.style.display = "block";
        confirmWarning.innerHTML = "* Confirm password is required";
        confirmWarning.style.color = "red";
        document.getElementById("Confirm").style.borderColor = "red"; 
        confirmPasswordValid = false;
    } 
    else if (confirmPassword !== password) {
        confirmWarning.style.display = "block";
        confirmWarning.innerHTML = "* Password doesn't match";
        confirmWarning.style.color = "red";
        confirmPasswordValid = false;
    } 
    else {
        confirmWarning.style.display = "none";
        document.getElementById("Confirm").style.borderColor = "black";
        confirmPasswordValid = true;
    }

    // toggleSubmitButton();
}

function toggleSubmitButton() {
    let createButton = document.getElementById("create");
    document.getElementById("News").style.display = "none";
    if (emailValid && passwordValid && confirmPasswordValid && usernamevalid) {
        createButton.disabled = false;
        document.getElementById("create").style.backgroundColor = "#25DAC5";
    } 
    else {
        createButton.disabled = true;
        document.getElementById("create").style.backgroundColor = "#EBEBE4";
    }
}

function create_account() {
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const user = document.getElementById("uname").value.trim();
    // const confirmPassword = document.getElementById("Confirm").value.trim();

    let warnings = false;

    if(!usernamevalid){
        document.getElementById("userwarning").style.display = "block";
        document.getElementById("userwarning").innerHTML = "* Username is required";
        document.getElementById("userwarning").style.color = "red";
        document.getElementById("uname").style.borderColor = "red";
        // return false;
    }
    else{
        document.getElementById("uname").style.borderColor = "black";
    }
    // Email 
    if (!emailValid) {
        document.getElementById("warning").style.display = "block";
        document.getElementById("warning").innerHTML = "* Please enter a valid email.";
        document.getElementById("warning").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
        warnings = true;
        // return false;
    } 
    else {
        document.getElementById("email").style.borderColor = "black";
    }

    // Password 
    if (!passwordValid) {
        document.getElementById("warningp").style.display = "block";
        document.getElementById("warningp").innerHTML = "* Please enter a valid password.";
        document.getElementById("warningp").style.color = "red";
        document.getElementById("password").style.borderColor = "red";
        warnings = true;
        // return false;
    } 
    else {
        document.getElementById("password").style.borderColor = "black";
    }

    // Confirm password validation
    if (!confirmPasswordValid) {
        document.getElementById("confirm-warning").style.display = "block";
        document.getElementById("confirm-warning").innerHTML = "* Confirm Password is required.";
        document.getElementById("confirm-warning").style.color = "red";
        document.getElementById("Confirm").style.borderColor = "red";
        warnings = true;
        return false;
    } 
    else {
        document.getElementById("Confirm").style.borderColor = "black";
    }
    // If there are warnings, stop execution
    if (warnings) {
        return;
    }
    emailarray.push(email);
    passwordarray.push(password);
    // console.log(emailarray , passwordarray);
    size++;

    // Show success message
    document.getElementById("News").style.display = "block";
    document.getElementById("News").innerHTML = "Account Created Successfully";
    document.getElementById("News").style.color = "green";
    document.getElementById("News").style.fontSize = "16px";
    document.getElementById("News").style.fontWeight = "bold";

    alert("User Name : " + user +"\n"+"Email : " + email);
    console.log("User Name : " + user +"\n"+"Email : " + email);

    // Clear input fields after successful account creation
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("Confirm").value = "";

    // Reset validation flags and disable the submit button
    setTimeout(function(){
        emailValid = false;
        passwordValid = false;
        confirmPasswordValid = false;
        toggleSubmitButton();
    },5000)
        
    document.getElementById("character").style.color = "red";
    document.getElementById("uppercase").style.color = "red";
    document.getElementById("lowercase").style.color = "red";
    document.getElementById("digit").style.color = "red";
    document.getElementById("Passwordc").style.color = "red";

} 

function visible() {
    let vision = document.getElementById("visibility");
    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
        vision.className = "fas fa-eye";
    } 
    else {
        password.type = "password";
        vision.className = "fas fa-eye-slash";
    }
}

function signup_color() {
    document.getElementById("News").style.display = "none";
    document.getElementById("warning").style.display = "none";
    document.getElementById("warningp").style.display = "none";
    document.getElementById("confirm-warning").style.display = "none";
    document.getElementById("selecter").style.background = "#1E0E62";
    document.getElementById("signup").style.color = "#1E0E62";
    document.getElementById("selected").style.background = "#EBEAED";
    document.getElementById("login-color").style.color = "#EBEAED";
    document.getElementById("create").innerHTML = "Create an Account";
    document.getElementById("create").style.left = "65px";
    document.getElementById("Confirm").style.display = "block";
}

function login_color() {
    document.getElementById("News").style.display = "none";
    document.getElementById("warning").style.display = "none";
    document.getElementById("warningp").style.display = "none";
    document.getElementById("confirm-warning").style.display = "none";
    document.getElementById("selecter").style.background = "#EBEAED";
    document.getElementById("signup").style.color = "#EBEAED";
    document.getElementById("selected").style.background = "#1E0E62";
    document.getElementById("login-color").style.color = "#1E0E62";
    document.getElementById("create").innerHTML = "Login";
    document.getElementById("create").style.left = "65px";
    document.getElementById("Confirm").style.display = "none";
}
