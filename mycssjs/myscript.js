let text = document.getElementById('text');
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    text.style.marginTop =value *2.5+'px';

})
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // 获取图片元素
    var firstImage = document.getElementById('firph');
    var secondImage = document.getElementById('secph');
    var secondTitle = document.getElementById('test2');

    // 控制第一个图片的透明度：随着滚动，透明度由 1 变到 0
    var firstImageOpacity = 1 - scrollPosition / 1200;  // 500 是滚动的阈值
    if (firstImageOpacity < 0) firstImageOpacity = 0; // 最小为 0
    firstImage.style.opacity = firstImageOpacity;

    // 控制第二个图片的透明度：随着滚动，透明度由 0 变到 1
    var secondImageOpacity = scrollPosition / 500;  // 500 是滚动的阈值
    if (secondImageOpacity > 1) secondImageOpacity = 1; // 最大为 1
    secondImage.style.opacity = secondImageOpacity;

    // 控制第二个标题透明度：随着滚动，标题逐渐显示
    var secondTitleOpacity = scrollPosition / 500;
    if (secondTitleOpacity > 1) secondTitleOpacity = 1; // 最大为 1
    secondTitle.style.opacity = secondTitleOpacity;
});