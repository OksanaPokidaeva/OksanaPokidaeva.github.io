/*----------------Кнопка В Каталог--------------------*/

$(function() {

$(window).scroll(function() {

if($(this).scrollTop() != 0) {

$('#toCatalog').fadeIn();

} else {

$('#toCatalog').fadeOut();

}

});

$('#toCatalog').click(function() {

$('body,html').animate({scrollTop:0},800);
$('body,html').find('#collapseOne').addClass('show');

});

});

/*----------------Кнопка Наверх--------------------*/

$(function() {

$(window).scroll(function() {

if($(this).scrollTop() != 0) {

$('#toTop').fadeIn();

} else {

$('#toTop').fadeOut();

}

});

$('#toTop').click(function() {

$('body,html').animate({scrollTop:0},800);


});

});

/*------------------Раскрытие меню на главной странице----------------------*/
$(document).ready(function() {
  var location = window.location.href;
  var cur_url = location.split('/').pop();
  var cur_link = "index.html";

  if (cur_url == cur_link) {

    $('#collapseOne').addClass('show');
  }
});
