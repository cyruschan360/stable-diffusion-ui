// ==UserScript==
// @name         Google Adsense
// @version      1.0
// @description  Load Google Adsense
// @author       Gigantic Work

(function () {
    
    const isGiganticWork = location.hostname.endsWith('gigantic.work');
    if (isGiganticWork) {
        let displayAds = document.createElement("ins");
        displayAds.classList.add("adsbygoogle");
        displayAds.style.cssText = 'display:block;';
        displayAds.setAttribute("data-ad-client", "ca-pub-6738885094003587");
        displayAds.setAttribute("data-ad-slot", "9143190715");
        displayAds.setAttribute("data-ad-format", "auto");
        displayAds.setAttribute("data-full-width-responsive", "true");

        let preview = document.getElementById('preview');
        preview.prepend(displayAds.cloneNode());
        (adsbygoogle = window.adsbygoogle || []).push({});

        let footer = document.getElementById('footer');
        footer.prepend(displayAds.cloneNode());
        (adsbygoogle = window.adsbygoogle || []).push({});

        let insertTaskAds = function () {
            let inTaskAds = displayAds.cloneNode();
            let el = document.querySelector('.imageTaskContainer');
            el.appendChild(inTaskAds);
            (adsbygoogle = window.adsbygoogle || []).push({});
        }

        const superCreateTask = window.createTask;
        window.createTask = function( task ) {
            superCreateTask( task );

            let enableTaskAds = (Math.random() < 0.25);
            if (enableTaskAds) {
                insertTaskAds();
            }
        }
    }

})();
