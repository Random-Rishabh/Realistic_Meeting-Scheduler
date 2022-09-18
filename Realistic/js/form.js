var btn = document.getElementById('save');
var ary = [];
var loadObj = JSON.parse(localStorage.getItem('DATA'));
if (loadObj != null) {
    ary = loadObj;
}
function storedata () {

    var evnt_name = document.getElementById('event_name');
    var descBox = document.getElementById('desc_box');
    var locati = document.getElementById('Location');
    var time_dur = document.getElementById('time_duration');
    var event_link = document.getElementById('event_link');
    var val = [evnt_name.value, descBox.value, locati.value, time_dur.value, event_link.value];
    let newAry = [];
    for (i = 0; i < val.length; i++) {
        newAry.push(val[i]);
    }
    ary.push(newAry);
    console.log(ary);
    localStorage.setItem('DATA', JSON.stringify(ary));
    alert('Added Event Successfully!');
    window.location.href = './user.html'
}
btn.addEventListener('click',storedata);

function redirect(){
    window.location.href = './user.html'
}