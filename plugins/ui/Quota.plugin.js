// ==UserScript==
// @name         QuotaLimiter
// @version      1.0
// @description  Limit quota per day
// @author       Gigantic Work

(function () {
    const quota = 60;
    const button = document.getElementById("makeImage");
    const num_outputs_total = document.getElementById("num_outputs_total");
    const num_outputs_parallel = document.getElementById("num_outputs_parallel");
    const today = new Date().toJSON().slice(0, 10);
    const host = location.origin || location.href;
    const homeURL = host.replace('stablediffusion.', '');
    
    const disableMakeImage = function (message) {
        button.disabled = true;
        button.innerText = message;
        createTask = function () { }
    }
    
    const cleanTasks = async function () {
        await stopAllTasks();
    }
    
    const redirectToHome = function () {
        const timeout = 10 * 60 * 1000; // 10 mins
        setTimeout(() => {
            location.assign(homeURL);
            location.href = homeURL;
        }, timeout); 
    }

    // Override default makeImage function
    const parentMakeImage = makeImage;
    button.removeEventListener("click", makeImage); 
     
    makeImage = function () {
        // Get usage of current session
        let usage = parseInt(localStorage.getItem(`stable-diffusion-usage-${today}`) || 0);
   
        usage += Math.max(parseInt(num_outputs_total.value), 1);
        localStorage.setItem(`stable-diffusion-usage-${today}`, Math.min(usage, quota));
        
        let isQuotaExceed = (usage > quota);        
        let invalidTotal = (parseInt(num_outputs_total.value) !== 1);
        let invalidParallel = (parseInt(num_outputs_parallel.value) !== 1);
        let errorMsg = (invalidTotal || invalidParallel) ? 'Invalid Parameters' : 'Exceed Daily Quota';
                
        if (isQuotaExceed || invalidTotal || invalidParallel) {
            disableMakeImage(errorMsg);
            redirectToHome();
        }
        else {
            window.postMessage("makeImage", location.origin);
            parentMakeImage();
        }
    }
       
    button.addEventListener("click", makeImage);
})();


