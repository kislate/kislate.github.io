
let isAnimating = false;

window.addEventListener('wheel', function(event) {
    if (isAnimating) return;

    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');

    if (event.deltaY > 0) { 
        isAnimating = true;
        page1.style.filter = 'blur(10px)';
        page1.style.opacity = 0.2;
        page2.style.transform = 'translateY(0)';
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    } else if (event.deltaY < 0 && page1.style.filter.includes('10px')) { 
        isAnimating = true;
        page1.style.filter = 'blur(0px)';
        page1.style.opacity = 1;
        page2.style.transform = 'translateY(100%)';
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
});