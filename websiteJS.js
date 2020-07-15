'use strict';

//set up lists with classes
var modals = document.getElementsByClassName("modal");
var images = document.getElementsByClassName("skillsIMG");
var modalImages = document.getElementsByClassName("modal-content");
var spans = document.getElementsByClassName("close");

//functions to create handler for onclick events of images
function createHandler(index, modalList, modalImgs){
    return function() {
        modalList[index].style.display = "block";
        modalImgs[index].src = this.src;
    }
}

//initialize all image click handlers and modal span buttons
for (let i = 0; i < modals.length; i++) {
    images[i].onclick = createHandler(i, modals, modalImages);
    spans[i].onclick = function (){
        modals[i].style.display = "none"
    }
}
