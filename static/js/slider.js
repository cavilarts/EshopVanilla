
var images = [{url: "static/images/hard/jaw.jpg"}, {url: "static/images/choco/bear.jpg"}, {url: "static/images/gum/mint.jpg"}]

function slide(){
    var i,
        image = document.getElementsByClassName('imageSlider')[0],
        buttons = Array.prototype.slice.call(document.getElementsByClassName('slideButton')),
        cant = buttons.length;
    
    for (i = 0; i < cant; i++) {
        var button = buttons[i];
        button.addEventListener("click", function(e){
            var index = buttons.indexOf(e.currentTarget);
            image.src = images[index].url;
        });
    }
}

(function(){
    slide();
}());





