(function() {
    var windowWidth = window.innerWidth,
        $sliderImages = document.getElementsByClassName('sliderImages')[0],
        sliderButtons = document.getElementsByClassName('sliderButton'),
        cantButtons = sliderButtons.length,
        $sliderList = document.getElementsByClassName('sliderList');
        
    function sliderWidth() {
        var howManyChildren = $sliderImages.children.length;

        for (i = 0; i < $sliderList.length; i++) {
            $sliderList[i].style.width = windowWidth + "px"; 
        }

        $sliderImages.style.width = windowWidth * howManyChildren + "px";
    }

    function slideAction() {
        var button;

        for (i = 0; i < cantButtons; i++) {
            button = sliderButtons[i];
            button.addEventListener("click", slideAndClass.bind(null, i))
        }        
               
    }

    function slideAndClass(index) {
        $sliderImages.style.left = (windowWidth * (index * (-1))) + "px";
        
        for (i = 0; i < cantButtons; i++) {
            sliderButtons[i].classList.remove('sliderActive');  
        }

        sliderButtons[index].classList.toggle('sliderActive');
    }
    
    window.onresize = resize;

    function resize() {
        var windowWidth = window.innerWidth,
            $sliderImages = document.getElementsByClassName('sliderImages')[0],
            $sliderList = document.getElementsByClassName('sliderList'),
            sliderButtons = document.getElementsByClassName('sliderButton'),
            button;

        for (i = 0; i < $sliderList.length; i++) {
            $sliderList[i].style.width = windowWidth.toString() + "px";
        }

        $sliderImages.style.width = (windowWidth * $sliderList.length) + "px";

    }

    sliderWidth();
    slideAction();
    resize();
})();