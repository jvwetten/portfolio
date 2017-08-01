/**
 * Created by Jelle on 28-7-2017.
 */

var menuMobile = document.getElementsByClassName("menu__mobile");
var menuMobileNav = document.getElementsByClassName("menu__mobile--nav");
var menuMobileX = document.getElementsByClassName("menu__mobile--x");

function openMenu() {

    var menuMobile = document.getElementsByClassName("menu__mobile");
    var menuMobileNav = document.getElementsByClassName("menu__mobile--nav");
    var menuMobileX = document.getElementsByClassName("menu__mobile--x");

    menuMobile.classList.remove("open");
    menuMobileX.classList.remove("close");
    menuMobileNav.classList.remove("close");

    menuMobile.className += "close";
    menuMobileX.className += "open";
    menuMobileNav.className += "open";
}

function closeMenu() {
    menuMobile.classList.remove("close");
    menuMobileX.classList.remove("open");
    menuMobileNav.classList.remove("open");

    menuMobile.className += "open";
    menuMobileX.className += "close";
    menuMobileNav.className += "close";
}
