var getName =  document.forms[0].elements[0].value;
var getUsername = document.forms[0].elements[2].value;
var password = document.forms[0].elements[3];
var secondPasswordBox = document.forms[0].elements[4];
var matchingPassword = document.forms["registerForm"].getElementsByTagName("verifyPassword");

function checkPasswordlength() {
  var required = 10;
  var passwordLength = password.value;
  if(passwordLength.length < required) {
    alert("Password must be at least 10 characters long");
  }
  else {
    return true;
  }
};


function passwordsMatch() {
  firstPassword = password.value;
  secondPassword = secondPasswordBox.value;
    if(firstPassword != secondPassword) {
      alert("Passwords do not match");
      return false;
    }
    else {
    return true;
  }
};

//save username, password and name in database -> Name | Username | Password


document.getElementById("button").addEventListener("click",checkPasswordlength);
document.getElementById("button").addEventListener("click",passwordsMatch);
module.export = getName;
module.export = getUsername;
module.export = firstPassword;
