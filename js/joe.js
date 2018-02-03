var color_list = ["#cbdbff","#92c1bf","#dbe5ac","#ede0b2","#edc3b2","#d19daf"]


$(".sec-books div, .sec-skills div").each(function (index, element) {
  var index_color = Math.floor((Math.random() * 6)) % 6;
  $(this).css({'background-color': color_list[index_color]});
});

$(".zy-logo").click(function(){
  $('.post-listing').animate({scrollTop:0}, 'slow');
});