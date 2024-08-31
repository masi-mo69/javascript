

document.addEventListener('keydown' , function(event){
    document.getElementById('keyCode').innerHTML = event.keyCode;
    document.getElementById('key').innerHTML = event.key;
    document.getElementById('location').innerHTML = event.location;
    document.getElementById('which').innerHTML = event.which;
    document.getElementById('code').innerHTML = event.code;
})