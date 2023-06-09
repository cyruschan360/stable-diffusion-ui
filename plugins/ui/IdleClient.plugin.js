// ==UserScript==
// @name         IdleClient
// @version      1.0
// @description  Reset idle client
// @author       Gigantic Work

(function () {
    const timeout = 20 * 60 * 1000; // 20 mins
    const host = location.origin || location.href;
    const homeURL = host.replace('stablediffusion.', '');
    const self = this;
        
    const redirectToHome = function () {
        return setTimeout(() => {
            location.assign(homeURL);
            location.href = homeURL;
        }, timeout); 
    }
    
    self.idleTimer = redirectToHome();
    
    // Reset timeer if makeImage occur.
    window.addEventListener("message", (event) => {
        const isMakeImage = (event.data === 'makeImage');
        const isSameOrigin = (event.origin === location.origin);
        
        if (isMakeImage && isSameOrigin) {
            clearTimeout(self.idleTimer);
            self.idleTimer = redirectToHome();
        }
    });
})();
