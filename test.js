var heaDer = document.getElementById('header');

/* The first */
var sizeBrowser = window.innerWidth;
var headerFix = document.getElementsByClassName('header__fix');
var checkClass = headerFix.length;

if ((sizeBrowser < 1024) && (checkClass == 0)) {
    heaDer.classList.add('header__fix');
}

if ((sizeBrowser >= 1024) && (checkClass == 1)) {
    heaDer.classList.remove('header__fix');
}

/* When rotate screen */
document.getElementsByTagName("BODY")[0].onresize = function() {addClass()};

function addClass() {
    sizeBrowser = window.innerWidth;
    headerFix = document.getElementsByClassName('header__fix');
    checkClass = headerFix.length;
    if ((sizeBrowser < 1024) && (checkClass == 0)) {
        heaDer.classList.add('header__fix');
    }

    if ((sizeBrowser >= 1024) && (checkClass == 1)) {
        heaDer.classList.remove('header__fix');
    }
}