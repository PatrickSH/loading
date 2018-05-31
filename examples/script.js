$(document).ready(function(){
    var c = setInterval(function(){
        var currentFill = $("#fill-me").attr("data-danban-loader-fill-percentage");
        var newFill = parseInt(currentFill) + 1;
        $("#fill-me").attr("data-danban-loader-fill-percentage",newFill);
    },200);

    $(document).on('change','#fill',function(){
        $("#fill-by-user").attr("data-danban-loader-fill-percentage",$(this).val());
    });
});