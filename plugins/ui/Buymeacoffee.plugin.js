// ==UserScript==
// @name         Google Adsense
// @version      1.0
// @description  Load Google Adsense
// @author       Gigantic Work

(function () {
    
    const isGiganticWork = location.hostname.endsWith('gigantic.work');
    if (isGiganticWork) {
        let script = document.createElement("script");
        script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
        script.setAttribute("data-name", "BMC-Widget");
        script.setAttribute("data-cfasync", "false");
        script.setAttribute("data-id", "giganticwork");
        script.setAttribute("data-description", "Support me on Buy me a coffee!");
        script.setAttribute("data-message", "Your support can keeps me going and make the site sustainable.");
        script.setAttribute("data-color", "#40DCA5");
        script.setAttribute("data-position", "Right");
        script.setAttribute("data-x_margin", "18");
        script.setAttribute("data-y_margin", "18");
        document.body.appendChild(script);
    }

})();
