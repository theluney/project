$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
    $('.slider').toggleClass("active");
  });

});

function showFirst(){
  document.getElementById("page1").style.display="block";
  document.getElementById("page2").style.display="none";
  $('html, body').animate({
    scrollTop: $('.header').offset().top
  }, 500);
}
function showSecond(){
  document.getElementById("page1").style.display="none";
  document.getElementById("page2").style.display="block";
  $('html, body').animate({
    scrollTop: $('.header').offset().top
  }, 500);
}

function showComFirst(){
  document.getElementById("com__page1").style.display="block";
  document.getElementById("com__page2").style.display="none";
  $('html, body').animate({
    scrollTop: $('.header').offset().top
  }, 500);
}
function showComSecond(){
  document.getElementById("com__page1").style.display="none";
  document.getElementById("com__page2").style.display="block";
  $('html, body').animate({
    scrollTop: $('.header').offset().top
  }, 500);
}
function scrollTopMain(){
  $('html, body').animate({
    scrollTop: $('.form').offset().top
  }, 500);
}
function scrollTopNews(){
  $('html, body').animate({
    scrollTop: $('.news').offset().top
  }, 500);
}
function scrollTopInter(){
  $('html, body').animate({
    scrollTop: $('.comments').offset().top
  }, 500);
}
function scrollTopComments(){
  $('html, body').animate({
    scrollTop: $('.news').offset().top
  }, 500);
}
jQuery("document").ready(function($){
  var nav = $('.header__content');
  $(window).scroll(function () {
      if ($(this).scrollTop() > 136) {
          nav.addClass("f-nav");
      } else {
          nav.removeClass("f-nav");
      }
  });
});

