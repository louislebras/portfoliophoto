function closeButton() {
    document.getElementById("thebigidea").style.display = "none";

}

function imageOne() {
    document.getElementById("thebigidea").style.display = "block";
    document.getElementById("changing").src = "public/src/images/wedding.jpg";
    document.getElementById('legende').innerHTML = "#mariage #été #2019";

}

function imageTwo() {
    document.getElementById("thebigidea").style.display = "block";
    document.getElementById("changing").src = "public/src/images/underwater.jpg";
    document.getElementById('legende').innerHTML = "#vacances #été #2018";
}

function imageThree() {
    document.getElementById("thebigidea").style.display = "block";
    document.getElementById("changing").src = "public/src/images/img_mountains.jpg";
    document.getElementById('legende').innerHTML = "#montagne #automne #2017";
}

function imageFour() {
    document.getElementById("thebigidea").style.display = "block";
    document.getElementById("changing").src = "public/src/images/mountainskies.jpg";
    document.getElementById('legende').innerHTML = "#montagne #automne #2016";
}