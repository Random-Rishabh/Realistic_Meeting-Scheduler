function submit() {
    var inputname = document.getElementById("Name1")+ document.getElementById("Name2");
    localStorage.setItem("Name", inputname.value);
    var inputEmail = document.getElementById("Email");
    localStorage.setItem("Email", inputEmail.value);

    var inputPassword = document.getElementById("Password");
    localStorage.setItem("Password", inputPassword.value);
    alert("You successfully signed up with Calendly");
    window.location.href = "./login.html";
}