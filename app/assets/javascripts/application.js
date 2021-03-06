// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require cocoon
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery_ujs
//= require toastr
//= require_tree .

toastr.options = {
      "closeButton": true,
      "debug": false,
      "positionClass": "toast-top-right",
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
};

jQuery(document).ready(function( $ ) {

  // Menu settings
  $('#menuToggle, .menu-close').on('click', function(){
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  });

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, 'easeInOutExpo');
      }
    }
    $('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Javascript Chart
  if($('#javascript').length) {

    var doughnutData = [{
      value: 70,
      color: "#f85c37"
    },
      {
        value: 30,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
  };

  // Bootstrap Chart
  if($('#bootstrap').length) {
    var doughnutData = [{
      value: 90,
      color: "#f85c37"
    },
      {
        value: 10,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
  }

  // WordPress Chart
  if($('#wordpress').length) {
    var doughnutData = [{
      value: 55,
      color: "#f85c37"
    },
      {
        value: 45,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);
  }

});

(function (factory) {
 if (typeof define === "function" && define.amd) {
   define(['jquery'], function ($) {
     return factory($);
   });
 } else if (typeof module === "object" && typeof module.exports === "object") {
   exports = factory(require('jquery'));
 } else {
   factory(jQuery);
 }
})(function($){

// Preserve the original jQuery "swing" easing as "jswing"
 if (typeof $.easing !== 'undefined') {
   $.easing['jswing'] = $.easing['swing'];
 }

 var pow = Math.pow,
   sqrt = Math.sqrt,
   sin = Math.sin,
   cos = Math.cos,
   PI = Math.PI,
   c1 = 1.70158,
   c2 = c1 * 1.525,
   c3 = c1 + 1,
   c4 = ( 2 * PI ) / 3,
   c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
 function bounceOut(x) {
   var n1 = 7.5625,
     d1 = 2.75;
   if ( x < 1/d1 ) {
     return n1*x*x;
   } else if ( x < 2/d1 ) {
     return n1*(x-=(1.5/d1))*x + .75;
   } else if ( x < 2.5/d1 ) {
     return n1*(x-=(2.25/d1))*x + .9375;
   } else {
     return n1*(x-=(2.625/d1))*x + .984375;
   }
 }

 $.extend( $.easing,
   {
     def: 'easeOutQuad',
     swing: function (x) {
       return $.easing[$.easing.def](x);
     },
     easeInQuad: function (x) {
       return x * x;
     },
     easeOutQuad: function (x) {
       return 1 - ( 1 - x ) * ( 1 - x );
     },
     easeInOutQuad: function (x) {
       return x < 0.5 ?
         2 * x * x :
         1 - pow( -2 * x + 2, 2 ) / 2;
     },
     easeInCubic: function (x) {
       return x * x * x;
     },
     easeOutCubic: function (x) {
       return 1 - pow( 1 - x, 3 );
     },
     easeInOutCubic: function (x) {
       return x < 0.5 ?
         4 * x * x * x :
         1 - pow( -2 * x + 2, 3 ) / 2;
     },
     easeInQuart: function (x) {
       return x * x * x * x;
     },
     easeOutQuart: function (x) {
       return 1 - pow( 1 - x, 4 );
     },
     easeInOutQuart: function (x) {
       return x < 0.5 ?
         8 * x * x * x * x :
         1 - pow( -2 * x + 2, 4 ) / 2;
     },
     easeInQuint: function (x) {
       return x * x * x * x * x;
     },
     easeOutQuint: function (x) {
       return 1 - pow( 1 - x, 5 );
     },
     easeInOutQuint: function (x) {
       return x < 0.5 ?
         16 * x * x * x * x * x :
         1 - pow( -2 * x + 2, 5 ) / 2;
     },
     easeInSine: function (x) {
       return 1 - cos( x * PI/2 );
     },
     easeOutSine: function (x) {
       return sin( x * PI/2 );
     },
     easeInOutSine: function (x) {
       return -( cos( PI * x ) - 1 ) / 2;
     },
     easeInExpo: function (x) {
       return x === 0 ? 0 : pow( 2, 10 * x - 10 );
     },
     easeOutExpo: function (x) {
       return x === 1 ? 1 : 1 - pow( 2, -10 * x );
     },
     easeInOutExpo: function (x) {
       return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
         pow( 2, 20 * x - 10 ) / 2 :
         ( 2 - pow( 2, -20 * x + 10 ) ) / 2;
     },
     easeInCirc: function (x) {
       return 1 - sqrt( 1 - pow( x, 2 ) );
     },
     easeOutCirc: function (x) {
       return sqrt( 1 - pow( x - 1, 2 ) );
     },
     easeInOutCirc: function (x) {
       return x < 0.5 ?
         ( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
         ( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
     },
     easeInElastic: function (x) {
       return x === 0 ? 0 : x === 1 ? 1 :
         -pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
     },
     easeOutElastic: function (x) {
       return x === 0 ? 0 : x === 1 ? 1 :
         pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
     },
     easeInOutElastic: function (x) {
       return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
         -( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
         pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
     },
     easeInBack: function (x) {
       return c3 * x * x * x - c1 * x * x;
     },
     easeOutBack: function (x) {
       return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
     },
     easeInOutBack: function (x) {
       return x < 0.5 ?
         ( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
         ( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
     },
     easeInBounce: function (x) {
       return 1 - bounceOut( 1 - x );
     },
     easeOutBounce: bounceOut,
     easeInOutBounce: function (x) {
       return x < 0.5 ?
         ( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
         ( 1 + bounceOut( 2 * x - 1 ) ) / 2;
     }
   });
});
      