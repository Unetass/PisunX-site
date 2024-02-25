document.addEventListener('DOMContentLoaded', function() {
    var contentElements = document.querySelectorAll('.content');
    var screenPosition = window.innerHeight / 1.2; // Появление контента при достижении 1/1.2 видимой части экрана

    contentElements.forEach(function(content) {
        var contentPosition = content.getBoundingClientRect().top;
        
        if (contentPosition < screenPosition) {
            content.classList.add('show');
        }
    });
});

window.addEventListener('scroll', function() {
    var contentElements = document.querySelectorAll('.content');
    var screenPosition = window.innerHeight / 1.2; // Появление контента при достижении 1/1.2 видимой части экрана

    contentElements.forEach(function(content) {
        var contentPosition = content.getBoundingClientRect().top;
        
        if (contentPosition < screenPosition) {
            content.classList.add('show');
        } else {
            content.classList.remove('show');
        }
    });
});
