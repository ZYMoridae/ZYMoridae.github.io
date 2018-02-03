var color1 = "#cbdbff";
var color2 = "#92c1bf";
var color3 = "#dbe5ac";
var color4 = "#ede0b2";
var color5 = "#edc3b2";
var color6 = "#d19daf";


$(".sec-skills div").each(function (index, element) {
    var index_color = Math.floor((Math.random() * 6)) % 6;
    var f_color = color1;
    if(index_color == 0)
    	f_color = color1;
    else if(index_color == 1)
    	f_color = color2;
    else if(index_color == 2)
    	f_color = color3;
    else if(index_color == 3)
    	f_color = color4;
    else if(index_color == 4)
    	f_color = color5;
    else if(index_color == 5)
    	f_color = color6;
    $(this).css({'background-color':f_color});
});


$(".sec-books div").each(function (index, element) {

    var index_color = Math.floor((Math.random() * 6)) % 6;
    var f_color = color1;
    if(index_color == 0)
        f_color = color1;
    else if(index_color == 1)
        f_color = color2;
    else if(index_color == 2)
        f_color = color3;
    else if(index_color == 3)
        f_color = color4;
    else if(index_color == 4)
        f_color = color5;
    else if(index_color == 5)
        f_color = color6;
    $(this).css({'background-color':f_color});
});

$(".zy-logo").click(function(){
    $('.post-listing').animate({scrollTop:0}, 'slow');
});