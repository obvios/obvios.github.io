//updated script//
var modals = document.getElementsByClassName("modal");
var images = document.getElementsByClassName("skillsIMG");
var modalImages = document.getElementsByClassName("modal-content");
var spans = document.getElementsByClassName("close");

var createHandler = function (index,modalList, modalImgs){
    return function(){
        modalList[index].style.display = "block";
        modalImgs[index].src = this.src;
    }
}

var createSpanHandler = function(index, modalList){
    return function() {
        modalList[index].style.display = "none";
    }
}

for (var i = 0; i < modals.length; i++) {
    images[i].onclick = createHandler(i, modals, modalImages);
    spans[i].onclick = createSpanHandler(i, modals);
}