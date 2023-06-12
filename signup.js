function validation(){

    // Email validation
    let userRef = document.querySelector("#username");
    let username = userRef.value;
    let emailRef = document.querySelector("#email");
    let email = emailRef.value;
    let passwordRef = document.querySelector("#password");
    let password = passwordRef.value;  
    let confirmPasswordRef = document.querySelector("#confirmPassword");
    let confirmPassword = confirmPasswordRef.value;
    let userRegx = /^([A-Za-z0-9]{2,10})$/;
    let emailRegx = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})$/;
    let passRegx=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    

    //user validation
      // Username validation
      if(username.trim()==""){
        userRef.classList.add("is-invalid");
        return false;
    }
    else if(!userRegx.test(username)){
        alert("Invalid username");
        return false;
    }
    else{
        userRef.classList.remove("is-invalid");
    }
     // Email validation
     if(email.trim()==""){
        emailRef.classList.add("is-invalid");
        return false;
    }
    else if(!emailRegx.test(email)){
        alert("Invalid username");
        return false;
    }
    else{
        emailRef.classList.remove("is-invalid");
    }

    // Password validation 

   
    if(password.trim()==""){
        passwordRef.classList.add("is-invalid");
        return false;
    }
    else if(!passRegx.test(password)){
        alert("Invalid password");
        return false;
    }
    else{
        passwordRef.classList.remove("is-invalid");
    }

    // Confirm-Password validation

    if(confirmPassword.trim()=="" ){
        confirmPasswordRef.classList.add("is-invalid");
        return false;
        
    }
    else if(!password.match(confirmPassword)){
        confirmPasswordRef.classList.add("is-invalid");
        alert("Password doesn't match !");
        return false;
    }
    else{
        confirmPasswordRef.classList.remove("is-invalid");
    }

    return true;
}