window.onload = function() {

    var bars = document.querySelectorAll('.danban-bar-loader');
    var barsCount = bars.length; //Minus one makes easer for loop

    function changeFillPercent(bar,percentage)
    {
        if(percentage <= 100)
            bar.style.width = percentage+"%";
    }


    function setObserver(bar)
    {
        var observer = new MutationObserver(function(mutations) { //Set up observer so we listen to changes
            mutations.forEach(function(mutation) {
                if (mutation.type == "attributes") {
                    changeFillPercent(mutation.target,mutation.target.dataset.danbanLoaderFillPercentage);
                }
            });
        });

        observer.observe(bar, { //Assing to observers
            attributes: true //configure it to listen to attribute changes
        });
    }

    function sideToSide(bar,fill,percentage)
    {
        changeFillPercent(bar,percentage);
        bar.style.backgroundColor = fill;
        bar.classList += " danban-side-to-side";
    }

    function loadingFill(bar,fill,percentage)
    {
        bar.classList += " danban-loading-fill";
        changeFillPercent(bar,percentage);

        bar.style.backgroundColor = fill;

        setObserver(bar);
    }

    for (var i = 0; i < barsCount; i++) {
        var currentBar = bars[i];
        var currentFill = currentBar.dataset.danbanLoaderFillColor;
        var currentPercentage = currentBar.dataset.danbanLoaderFillPercentage;
        var currentMode = currentBar.dataset.danbanMode;

        if(currentMode == "loading-side-to-side")
            sideToSide(currentBar,currentFill,currentPercentage);

        if(currentMode == "loading-fill")
            loadingFill(currentBar,currentFill,currentPercentage);


    }
};
