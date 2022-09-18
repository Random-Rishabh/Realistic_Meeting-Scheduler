
function submit() {
  var inputEmail = document.getElementById("email").value;
  var inputPassword = document.getElementById("password").value;

  var storeEmail = localStorage.getItem("Email");
  var storePassword = localStorage.getItem("Password");

  // console.log(storeEmail);
  if (storeEmail == inputEmail && storePassword == inputPassword) {
    alert("You are Successfully logged in to Calendly");
    window.location.href = "./user.html";
  } else {
    alert("Please enter correct credential");
  }
  
}
