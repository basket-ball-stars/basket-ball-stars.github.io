// Header kaybol görün özelliği
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        $(".header-act").removeClass("act-active");
    } else {
        $(".header-act").addClass("act-active");
    }
});

// Menüye tıklanınca açılıp kapanma
document.querySelectorAll('.has-submenu').forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
        event.stopPropagation();  // Menüye tıklandığında dış tıklamayı engeller
        var submenu = this.querySelector('.submenu');
        
        // Mobil için geçici çözüm: Submenu'yi her zaman göster
        if (window.innerWidth <= 768) {
            submenu.classList.toggle('show');
        } else {
            submenu.classList.toggle('show');
        }
    });
});

// Dışarıya tıklanınca menünün kapanması
document.addEventListener('click', function() {
    var openSubmenu = document.querySelector('.submenu.show');
    if (openSubmenu) {
        openSubmenu.classList.remove('show');
    }
});

// Hamburger menü ikonu ile menü açılıp kapanma
const menuIcon = document.querySelector('.menu-icon');  // Class'a göre seç
const mainMenu = document.querySelector('.main-menu');  // Class'a göre seç

menuIcon.addEventListener('click', function() {
    mainMenu.classList.toggle('show');
});

// Fullscrenn özelliği
function requestFullScreen() {
    var el = document.getElementById("iframegame");
    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen 
    || el.mozRequestFullScreen || el.msRequestFullScreen;
    if (requestMethod) {
      // Native full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
}};