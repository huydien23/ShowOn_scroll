var animationElements = document.querySelectorAll('.show-on-scroll');

function toggleAnimation(element) {
    var rects = element.getClientRects();
    if (rects.length > 0) {
        var rect = rects[0]; // Use the first rectangle
        var heightScreen = window.innerHeight;
        // Check if the element is in the viewport
        if (!(rect.bottom < 0 || rect.top - heightScreen >= heightScreen)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }
}

function checkAnimation() {

    animationElements.forEach(el=>{
        toggleAnimation(el);
    })
  
}

window.onscroll = checkAnimation;