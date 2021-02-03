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

var majorRows = document.getElementsByClassName("major-column");
for(let i = 0; i < majorRows.length; i++){
	if(i % 2 != 0){
		majorRows[i].style.backgroundColor = "whitesmoke";
	}
}
