
$(".toggleButton").hover(function(){
    $(this).addClass("highlightedButton");
},function(){
    $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    var panelId = $(this).attr("id")+"Panel";
    $("#"+panelId).toggleClass("hidden");
    var numberOfActivePanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width()/numberOfActivePanels)-8);
})

$(".panel").height($(window).height() - $("#header").height()-15);

$("textarea").on('change keyup paste',function(){

    $("iframe").contents().find("html").html( "<html<head><style type = 'text/css'>"+ $("#cssPanel").val() + "</style></head><body>" +  $("#htmlPanel").val() + "</body></html");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
})
