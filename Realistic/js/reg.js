
function hello(){
    var name=document.getElementById("name");
    if((name.length==0)||(name.length==undefined)){
        console.log(name.length)
        alert('Please enter the Full Name')
        window.location.href='./registration.html'
    }else{
        window.location.href='./second.html'
    }
}
