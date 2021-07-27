var links = document.querySelectorAll('.menu a');
var main = document.querySelectorAll('main');
var intro = document.querySelectorAll('.intro-section');
var linksLength = links.length
var mainLength = main.length
var introLength = main.length

for(var i = 0; i < linksLength; i++) {
    links[i].addEventListener('click', function() {
        document.getElementById('toggle').checked = false;
    });
}

for(var i = 0; i < mainLength; i++) {
    main[i].addEventListener('click', function() {
        document.getElementById('toggle').checked = false;
    });
}

for(var i = 0; i < introLength; i++) {
    intro[i].addEventListener('click', function() {
        document.getElementById('toggle').checked = false;
    });
}
