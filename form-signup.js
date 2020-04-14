var AllInputs = document.querySelectorAll("input");
var PasswordsMatch = true;
var EmptyInputMessage = "Please fill in all required fields";
var PasswordsDontMatch = "Passwords do not match";
var Passwords = document.classList("password");
var isVerified = false;


var i = 0;
for(i; i<AllInputs.length; i++) {
  if (AllInputs[i].value == null) {
    EmptyInputMessage.style.display = "inline-block";
  }

}

var required = 10;
if (Passwords.length < required) {
  PasswordsMatch = false;
  var PasswordLenght = "Password is too short";
  PasswordLength.style.display = "inline-block";
}

for(var j=0; j<Passwords[0].length; j++) {
  for(var k=0; k<Passwords[1].length; k++) {
    if Passwords[j] !==  Passwords[k] {
      PasswordsDontMatch.style.display == "inline-block";
    }
    else {
      isVerified = true;
      time.sleep(1);
      document.write("Registering your account...");
    }
  }
}
