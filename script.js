window.onload = function() {

    var bars = document.querySelectorAll('.danban-bar-loader');
    var barsCount = bars.length; //Minus one makes easer for loop

    function changeFillPercent(bar,percentage)
    {
        bar.style.width = percentage+"%";
    }

    for (var i = 0; i < barsCount; i++) {
        var currentBar = bars[i];
        var currentFill = currentBar.dataset.danbanLoaderFillColor;
        var currentPercentage = currentBar.dataset.danbanLoaderFillPercentage;

        changeFillPercent(currentBar,currentPercentage);

        currentBar.style.backgroundColor = currentFill;

        var observer = new MutationObserver(function(mutations) { //Set up observer so we listen to changes
            mutations.forEach(function(mutation) {
                if (mutation.type == "attributes") {
                    changeFillPercent(mutation.target,mutation.target.dataset.danbanLoaderFillPercentage);
                }
            });
        });

        observer.observe(currentBar, { //Assing to observers
            attributes: true //configure it to listen to attribute changes
        });
    }
};
