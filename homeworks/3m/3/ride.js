let startTime, updatedTime, difference, tInterval;
    let running = false;

    document.getElementById("start").onclick = function() {
        if (!running) {
            startTime = new Date().getTime();
            running = true;
            tInterval = setInterval(updateTime, 10);
            this.disabled = true;
            document.getElementById("stop").disabled = false;
            document.getElementById("reset").disabled = true;
        }
    };
 
    document.getElementById("stop").onclick = function() {
        if (running) {
            clearInterval(tInterval);
            running = false;
            document.getElementById("start").disabled = false;
            this.disabled = true;
            document.getElementById("reset").disabled = false;
        }
    };

    document.getElementById("reset").onclick = function() {
        clearInterval(tInterval);
        running = false;
        document.getElementById("display").innerHTML = "0.00";
        this.disabled = true;
        document.getElementById("start").disabled = false;
    };

    function updateTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;
        document.getElementById("display").innerHTML = (difference / 1000).toFixed(2);
    }