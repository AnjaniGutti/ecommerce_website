// Form Validation using JavaScript
function validation() {
  var name = document.getElementById("input1").value;
  var email = document.getElementById("input2").value;
  var number = document.getElementById("input3").value;
  var password = document.getElementById("input4").value;
  var cpassword = document.getElementById("input5").value;
  var namecheck = /^[A-Za-z ]{2,}$/;
  var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
  var numbercheck = /^[6789][0-9]{9}$/;
  var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;
  if (namecheck.test(name)) {
    document.getElementById("error-name").innerHTML = " ";
  } else {
    document.getElementById("error-name").innerHTML = "Use only Alphabets";
    return false;
  }
  if (emailcheck.test(email)) {
    document.getElementById("error-email").innerHTML = " ";
  } else {
    document.getElementById("error-email").innerHTML =
      "Invalid Email Syntax. Ex: abc@xyz.com";
    return false;
  }
  if (numbercheck.test(number)) {
    document.getElementById("error-number").innerHTML = "";
  } else {
    document.getElementById("error-number").innerHTML =
      "Use 10 digit valid mobile number";
    return false;
  }
  if (passwordcheck.test(password)) {
    document.getElementById("error-password").innerHTML = "";
  } else {
    document.getElementById("error-password").innerHTML =
      "Use alphabets, number & special characters. Min: 8, Max: 16";
    return false;
  }
  if (cpassword.match(password)) {
    document.getElementById("error-c-password").innerHTML = "";
  } else {
    document.getElementById("error-c-password").innerHTML =
      "Password does'nt match";
    return false;
  }
}
//checkout form
function validation() {
  var name = document.getElementById("input1").value;
  var email = document.getElementById("input2").value;
  var number = document.getElementById("input3").value;
  var zipcode = document.getElementById("input6").value;
  var city = document.getElementById("input7").value;
  var locality = document.getElementById("input8").value;
  var namecheck = /^[A-Za-z ]{2,}$/;
  var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
  var numbercheck = /^[6789][0-9]{9}$/;
  var zipcodecheck = /^[0-9]{6}$/;
  var citycheck = /^[A-Za-z ]{2,}$/;
  var localitycheck = /^[A-Za-z, ]{2,}$/;
  if (namecheck.test(name)) {
    document.getElementById("error-name").innerHTML = " ";
  } else {
    document.getElementById("error-name").innerHTML = "Use only Alphabets";
    return false;
  }
  if (emailcheck.test(email)) {
    document.getElementById("error-email").innerHTML = " ";
  } else {
    document.getElementById("error-email").innerHTML =
      "Invalid Email Syntax. Ex: abc@xyz.com";
    return false;
  }
  if (numbercheck.test(number)) {
    document.getElementById("error-number").innerHTML = "";
  } else {
    document.getElementById("error-number").innerHTML =
      "Use 10 digit valid mobile number";
    return false;
  }
  if (zipcodecheck.test(zipcode)) {
    document.getElementById("error-zipcode").innerHTML = "";
  } else {
    document.getElementById("error-zipcode").innerHTML =
      "Use 6 digit valid zipcode";
    return false;
  }
  if (citycheck.test(city)) {
    document.getElementById("error-city").innerHTML = " ";
  } else {
    document.getElementById("error-city").innerHTML = "Use only Alphabets";
    return false;
  }
  if (localitycheck.test(locality)) {
    document.getElementById("error-locality").innerHTML = " ";
  } else {
    document.getElementById("error-locality").innerHTML = "Invalid locality";
    return false;
  }
}
