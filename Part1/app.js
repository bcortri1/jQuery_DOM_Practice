$(function(){
    console.log(`Let’s get ready to party with jQuery!`);
})

$("article img").addClass("image-center");

$("p").last().remove();

$("#title").css("font-size",(Math.random())*101);

$("ol").append("<li>Woah Dog</li>");

$("aside").empty().append("<p>Apologies, the list that was previously here is now gone and was silly.</p>");

$("input").on("change",function(){

    let r = $("input").eq(0).val();
    let g = $("input").eq(1).val();
    let b = $("input").eq(2).val();
    $("body").css("background-color", `rgb(${r},${b},${g})`);
});

$("img").on("click",function(){
    $(this).remove();
})