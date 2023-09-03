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
 
    const cleanTasks = async function () {
        await stopAllTasks();
    }

    const clearAllTasks = function () {
        let taskEntries = document.querySelectorAll(".imageTaskContainer");
        taskEntries.forEach(removeTask);
    }

    const redirectToHome = function () {
        return setTimeout(() => {
            cleanTasks();
            clearAllTasks();
            location.replace(homeURL);
        }, timeout); 
    }
    
    self.idleTimer = redirectToHome();
    
    // Reset timer if makeImage occur.
    window.addEventListener("message", (event) => {
        const isMakeImage = (event.data === 'makeImage');
        const isSameOrigin = (event.origin === location.origin);
        
        if (isMakeImage && isSameOrigin) {
            clearTimeout(self.idleTimer);
            self.idleTimer = redirectToHome();
        }
    });
})();
