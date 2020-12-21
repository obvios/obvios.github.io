'use strict'

var modalImageList = document.getElementsByClassName("Project-modal-image-container-image");
var spans = document.getElementsByClassName("close");

for(let i = 0; i < modalImageList.length; i++){
    let modal = document.getElementById(modalImageList[i].id + '-modal');
    modalImageList[i].onclick = function(){
        modal.style.display = "block";
    }
    spans[i].onclick = function(){
        modal.style.display = "none";
    }
}
