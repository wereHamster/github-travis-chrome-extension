
var img = window.document.createElement('img');
var project = window.location.pathname.split('/').splice(0,3).join('/')

img.setAttribute('src', 'https://secure.travis-ci.org' + project + '.png');
img.setAttribute('alt', 'build status');

img.style.display = 'inline-block';
img.style.marginLeft = '8px';
img.style.marginBottom = '-1px';

var tab = window.document.getElementsByClassName('title-actions-bar')[0];
var h1 = tab.getElementsByTagName('h1')[0];
var strong = h1.getElementsByTagName('strong')[0];

strong.appendChild(img);
