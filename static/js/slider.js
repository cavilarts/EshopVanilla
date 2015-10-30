(function() {
    var windowWidth = window.innerWidth,
        $sliderImages = document.getElementsByClassName('sliderImages')[0],
        sliderButtons = Array.prototype.slice.call(document.getElementsByClassName('sliderButton')),
        cantButtons = sliderButtons.length,
        $imageSlider = document.getElementsByClassName('slimg');
        
    function slide() {
        var howManyChildren = $sliderImages.children.length;
            
        for (i = 0; i < $imageSlider.length; i++) {
            $imageSlider[i].style.width = windowWidth + "px"; 
        }

        $sliderImages.style.width = windowWidth * howManyChildren + "px";
    }

    function slideAction () {
        for (i = 0; i < cantButtons; i++) {
            var button = sliderButtons[i];
            
            button.addEventListener("click", function(e) {
                var index = sliderButtons.indexOf(e.currentTarget);
                $sliderImages.style.left = windowWidth * (index) * (-1) + "px";
            });
        }
    }

    slide();
    slideAction();
})();