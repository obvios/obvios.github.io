//Modal for C++
var modal1 = document.getElementById('c++Modal');
var img1 = document.getElementById('CIMG');
var modalImg1 = document.getElementById("IMG01");
img1.onclick = function() {
    modal1.style.display = "block";
    modalImg1.src = this.src;
}

var span1 = document.getElementsByClassName("close")[0];

span1.onclick = function() {
    modal1.style.display = "none";
}


//Modal for Python
var modal2 = document.getElementById('pythonModal');
var img2 = document.getElementById('PythonIMG');
var modalImg2 = document.getElementById("IMG02");
img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
}

var span2 = document.getElementsByClassName("close")[1];

span2.onclick = function () {
    modal2.style.display = "none";
}

//Modal for Java
var modal3 = document.getElementById('javaModal');
var img3 = document.getElementById('JavaIMG');
var modalImg3 = document.getElementById("IMG03");
img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
}

var span3 = document.getElementsByClassName("close")[2];

span3.onclick = function () {
    modal3.style.display = "none";
}