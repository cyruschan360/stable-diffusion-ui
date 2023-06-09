// ==UserScript==
// @name         Google Analytics
// @version      1.0
// @description  Load Google Analytics
// @author       Gigantic Work

const isGiganticWork = location.hostname.endsWith('gigantic.work');
if (!isGiganticWork) {
    let script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-JJPLVTDK43";
    script.async = true;
    document.head.appendChild(script);

    // success event 
    script.addEventListener("load", () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JJPLVTDK43');
    });
}
