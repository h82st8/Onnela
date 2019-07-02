$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100 && screen.width >= 1280) {
      $('#logo-scroll-hide').css({
          "display": "none"
      });

      $('#logo-scroll-show').css({
          "display": "inline-block"
      });

      $('.navbar-header').css({
          "justify-content": "flex-start"
      });

      $('.navbar-nav>li').css({
          "padding": "0 20px",
          "border-right": "0"
      });

      $('.navbar-nav').css({
          "justify-content": "flex-start"
      });

      $('.navbar-header').css({
          "display": "inline-block"
      });

      $('.navbar-collapse.collapse').css({
          "display": "inline-block"
      });

      $('.navbar-collapse-menu').css({
          "width": "auto"
      });
    }

    else if ($(this).scrollTop() < 100) {
      $('#logo-scroll-hide').css({
          "display": ""
      });

      $('#logo-scroll-show').css({
          "display": "none"
      });

      $('.navbar-header').css({
          "justify-content": ""
      });

      $('.navbar-nav>li').css({
          "padding": "",
          "padding-right": "",
          "border-right": ""
      });

      $('.navbar-nav').css({
          "justify-content": ""
      });

      $('.navbar-header').css({
          "display": ""
      });

      $('.navbar-collapse.collapse').css({
          "display": ""
      });

      $('.navbar-collapse-menu').css({
          "width": ""
      });
    }
  });

});