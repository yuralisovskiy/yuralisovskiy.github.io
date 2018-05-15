function showBio() {
    var bio = document.getElementById('txt');
    var check = document.getElementById('check');
    if (check.checked === true) {
        bio.style.display = 'block';
    } else {
        bio.style.display = 'none';
    }
}

function setLight() {
    var body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#ADD8E6';
    body[0].style.color = '#000000';
    var table = document.getElementsByClassName('table table-dark table-striped');
    var tables = document.getElementById('tabBody');
    table[0].style.backgroundColor = '#008B8B';
    tables[0].style.backgroundColor = '#1E90FF';
}

function setDark() {
    var body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#2F4F4F';
    body[0].style.color = '#FFFFFF';
    var table = document.getElementsByClassName('table table-dark table-striped');
    var tables = document.getElementById('tabBody');
    table[0].style.backgroundColor = '#212529';
    tables[0].style.backgroundColor = '#343a40';
}

function checkPass() {
    var pass_1 = document.getElementById('inpPass');
    var pass_2 = document.getElementById('passRep');
    var button = document.getElementById('button');
    button.disabled = pass_1.value !== pass_2.value;
}

function writeDB() {
    var nameCheck = !/^[a-zA-Z]+$/.test(document.forms['addForm']['name'].value);
    var usernameCheck = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/.test(document.forms['addForm']['username'].value);
    var ageCheck = (document.forms['addForm']['age'].value >= 100 || document.forms['addForm']['age'].value < 1);
    var emailCheck = !(/@/.test(document.forms['addForm']['email'].value));
    if(nameCheck) {
        alert("Name must contain only letters!");
        return false;
    } else if (usernameCheck) {
        alert("Username can contain only Latin letters, numbers and underscores!");
        return false;
    } else if (ageCheck) {
        alert('Age must be more than 0 and less than 100!');
        return false;
    } else if (emailCheck) {
        alert('E-mail must contain \'@\' character!');
        return false;
    }
    return true;
}

function drawCircle() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}


function writeText() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);
}


function loadImage() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    var img = document.getElementById('image');
    ctx.drawImage(img, 0, 0);
}