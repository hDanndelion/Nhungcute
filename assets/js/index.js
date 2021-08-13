/* Change header according to width browser */
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
/*  */

/* Click to on/off slidebar */
var checkBox = document.getElementById('checkbox');
var sidebarWrap = document.querySelector('.sidebar__wrap');

checkBox.onclick = function () {
    if(checkBox.checked == true) {
        sidebarWrap.classList.add('sidebar__wrap-onmode');
    } else {
        sidebarWrap.classList.remove('sidebar__wrap-onmode');
    }
}
/*  */