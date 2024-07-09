// ==UserScript==
// @name         Buymeacoffee
// @version      1.0
// @description  Load Buymeacoffee
// @author       Gigantic Work

(function () {
    
    const isGiganticWork = location.hostname.endsWith('gigantic.work');
    if (isGiganticWork) {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add("gigantic-work");
    }

})();
