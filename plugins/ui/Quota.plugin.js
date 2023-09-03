// ==UserScript==
// @name         QuotaLimiter
// @version      1.0
// @description  Limit quota per day
// @author       Gigantic Work

(function () {
    const button = document.getElementById("makeImage");
    const num_outputs_total = document.getElementById("num_outputs_total");
    const num_outputs_parallel = document.getElementById("num_outputs_parallel");
    const today = new Date().toJSON().slice(0, 10);
    const host = location.origin || location.href;
    const homeURL = host.replace('stablediffusion.', '');
    
    const disableMakeImage = function (message = 'Invalid Operation') {
        button.disabled = true;
        button.innerText = message;
        createTask = function () { }
    }
    
    const cleanTasks = async function () {
        await stopAllTasks();
    }

    const clearAllTasks = function () {
        let taskEntries = document.querySelectorAll(".imageTaskContainer");
        taskEntries.forEach(removeTask);
    }
    
    const redirectToHome = function ( timeout = 10 * 60 * 1000 ) {
        setTimeout(() => {
            clearAllTasks();            
            location.replace(homeURL);
        }, timeout); 
    }

    // Override default makeImage function
    const parentMakeImage = makeImage;
    button.removeEventListener("click", makeImage);

    // Update usage of current session
    let quota = 10;
    let usage = 0;
    window.addEventListener("message", (event) => {
        const isPing = (typeof event.data === 'object') && ('quota' in event.data) && ('usage' in event.data);
        const isSameOrigin = (event.origin === location.origin);
        const pendingTask = document.querySelectorAll(".taskStatusLabel:not(.activeTaskLabel)").length;
        
        if (isPing && isSameOrigin) {
            quota = parseInt(event.data.quota);
            usage = parseInt(event.data.usage) + pendingTask;
        }
    });
     
    makeImage = function () {
        usage += Math.max(parseInt(num_outputs_total.value), 1);
        
        let isQuotaExceed = (usage > quota);        
        let invalidTotal = (parseInt(num_outputs_total.value) !== 1);
        let invalidParallel = (parseInt(num_outputs_parallel.value) !== 1);
        let errorMsg = (invalidTotal || invalidParallel) ? 'Invalid Parameters' : 'Daily Quota Exceeded';
                
        if (isQuotaExceed || invalidTotal || invalidParallel) {
            disableMakeImage(errorMsg);
            redirectToHome(10 * 60 * 1000); // After 10mins
        }
        else {
            window.postMessage("makeImage", location.origin);
            parentMakeImage();
        }
    }
       
    button.addEventListener("click", makeImage);
})();


