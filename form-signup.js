var AllInputs = document.querySelectorAll("input");
var getPassword = document.getElementById("first-password").value;
var passwordVerify = document.getElementById("verify-password").value;


jj
function checkPasswordLength() {
var required = 10;
if (Password.length < required) {
  document.querySelector(".paragraphs").display = "block";
  AllInputs.style.borderColor = "red";
  document.getElementById("message").style.display = "inline-block";
  var secondMessage = document.getElementById("second-message");
  secondMessage.style.display = "inline-block";
}
};

isRegistered = false;
function checkPasswords(event) {
for(var i=0; i<Password.length; i++) {
    if(input[i] == Verify) {
      isRegistered = true;
    }
    else {
      document.querySelector(".paragraphs").display = "block";
      var thirdMessage = document.getElementById("third-message");
      thirdMessage.style.display = "inline-block";
    }
};

document.getElementById("button").addEventListener("click",checkInputs);
document.getElementById("button").addEventListener("click",checkPasswordLength);
document.getElementById("button").addEventListener("click",checkPasswords);
