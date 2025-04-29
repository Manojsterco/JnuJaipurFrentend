

$("img").each(function(){
   $(this).addClass("lozad");
   $(this).attr("data-src",$(this).attr("src"));
   $(this).removeAttr("src");
});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).lozad=e()}(this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var d="undefined"!=typeof document&&document.documentMode,c={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");d&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,a=void 0,o=0;o<=r.length-1;o++)(a=r[o].getAttribute("data-src"))&&(r[o].src=a);t.load()}if(t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(",").join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var i=t.getAttribute("data-background-image-set").split(","),n=i[0].substr(0,i[0].indexOf(" "))||i[0];// Substring before ... 1x
n=-1===n.indexOf("url(")?"url("+n+")":n,1===i.length?t.style.backgroundImage=n:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+n+"; background-image: -webkit-image-set("+i+"); background-image: image-set("+i+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function l(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},c,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,s=e.loaded,g=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((r=u,a=s,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),l(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(o,i),e=0;e<t.length;e++)b(t[e])||(g?g.observe(t[e]):(u(t[e]),l(t[e]),s(t[e])))},triggerLoad:function(t){b(t)||(u(t),l(t),s(t))},observer:g}}});



const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();


// $(document).ready(function() {
//   var startingValue = 1; // You can set the starting value of the counter
//   $(".International-Collaborations-carousel .owl-dots button.owl-dot").each(function(index) {
//     var newNameValue = "button_" + (startingValue + index);
//     $(this).attr("name", newNameValue);
//   });
// });

$(function(){"use strict";$(".drop-down_menu").hover(function(){$("body").toggleClass("body_hover")}),$("section.inner-menu h2").click(function(){$("body").toggleClass("body_click")}),$(window).on("scroll",function(){10<$(window).scrollTop()?$(".scrolling-navbar").addClass("top-nav-collapse"):$(".scrolling-navbar").removeClass("top-nav-collapse")}),$("#show_search").click(function(){$(".searchoverlay").show()}),$(".hide_search").click(function(){$(".searchoverlay").hide()}),$(".openCollapse").click(function(){$(".showCollapse").toggle()}),$(".banner-carousel").owlCarousel({items:1,loop:!0,margin:0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!1,mouseDrag:!1,animateOut:"fadeOut",responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".counter-carousel").owlCarousel({items:1,loop:!1,margin:0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!1,responsive:{0:{items:1,autoplay:!0,mouseDrag:!0,loop:!0},600:{items:1,autoplay:!0,mouseDrag:!0,loop:!0},1e3:{items:2}}}),$(".International-Collaborations-carousel").owlCarousel({items:6,loop:!1,nav:!1,dots:!0,margin:10,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:2},600:{items:3},1e3:{items:6}}}),$(".innovation-carousel").owlCarousel({items:2,loop:!1,nav:!0,dots:!1,margin:10,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:2}}}),$(".Infrastructure-Glance-carousel").owlCarousel({items:1,loop:!0,nav:!0,dots:!1,margin:0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,mouseDrag:!0,slideSpeed:400,rewindSpeed:400,rewindNav:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".placement-carousel").owlCarousel({items:6,loop:!1,nav:!1,dots:!1,margin:10,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:6}}}),$(".traning-carousel").owlCarousel({items:5,loop:!1,nav:!1,dots:!1,margin:10,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:4}}}),$(".placementslide-carousel").owlCarousel({items:2,loop:!1,nav:!1,dots:!0,margin:10,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:2}}}),$(".about-carousel").owlCarousel({items:1,loop:!1,nav:!0,dots:!1,margin:10,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".academic-carousel").owlCarousel({items:1,loop:!1,nav:!1,dots:!0,margin:10,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".infra-carousel").owlCarousel({items:1,loop:!1,nav:!0,dots:!1,margin:10,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".our-faculty-carousel").owlCarousel({items:3,loop:!1,nav:!0,dots:!1,margin:0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:2},600:{items:2},1e3:{items:3}}}),$(".explore-carousel").owlCarousel({items:1,loop:!1,nav:!1,dots:!0,margin:0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".apply-carousel").owlCarousel({items:1,loop:!1,nav:!0,dots:!1,margin:0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".press-carousel").owlCarousel({items:1,loop:!1,nav:!1,dots:!0,margin:0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".mobile_nav_icon").on("click",function(){$("body").toggleClass("current"),$("#navbarResponsive2").toggleClass("menuopened"),$(this).toggleClass("open")}),$(document).ready(function(){$(".mobile_nav li").click(function(){$(".mobile_nav li > ul").not($(this).children("ul").toggle()).hide(),$(".mobile_nav .nav-item ").not($(this).children("ul").toggleClass("add")).removeClass("add")})}),$(".mobile_nav .nav-item").on("show.dropdown",function(){$(this).find(".dropdown-menu").first().stop(!0,!0).slideDown()}),$(".mobile_nav .nav-item").on("hide.dropdown",function(){$(this).find(".dropdown-menu").first().stop(!0,!0).slideUp()}),$(".dropdown-submenu a.link").on("click",function(e){$(this).parent().find(".dropdown-menu").first().stop(!0,!0).slideToggle(),$(this).toggleClass("open"),e.stopPropagation(),e.preventDefault()}),$(".filter-school h5").on("click",function(){$("body").toggleClass("filter-add"),$(".filter-school ul").toggleClass("filter-menu"),$(this).toggleClass("filter-open")}),$(".close-filter").click(function(){$("body").removeClass("filter-add"),$(".filter-school ul").removeClass("filter-menu")}),function(a){for(var t=new Array,e=function(e,o){if(document.querySelectorAll)o=document.querySelectorAll(e);else{var a=document,t=a.styleSheets[0]||a.createStyleSheet();t.addRule(e,"f:b");for(var s=a.all,l=0,i=[],n=s.length;l<n;l++)s[l].currentStyle.f&&i.push(s[l]);t.removeRule(0),o=i}return o}("img.lazy"),o=function(){for(var e,o=0;o<t.length;o++)0<=(e=(e=t[o]).getBoundingClientRect()).top&&0<=e.left&&e.top<=(a.innerHeight||document.documentElement.clientHeight)&&function(e,o){var a=new Image,t=e.getAttribute("data-src");a.onload=function(){e.parent?e.parent.replaceChild(a,e):e.src=t,o&&o()},a.src=t}(t[o],function(){t.splice(o,o)})},s=0;s<e.length;s++)t.push(e[s]);o(),function(e,o){a.addEventListener?this.addEventListener(e,o,!1):a.attachEvent?this.attachEvent("on"+e,o):this["on"+e]=o}("scroll",o)}(this),WOW.prototype.addBox=function(e){this.boxes.push(e)},(new WOW).init()}),$(document).ready(function(){$(".down-cont").click(function(){$(".fac-profile").toggleClass("full-cont")})}),$(".news-slider").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".upcoming-slider").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}});var owl=$(".Tie-Ups-carousel");owl.owlCarousel({items:5,loop:!1,nav:!0,dots:!1,margin:10,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,mouseDrag:!1,responsive:{0:{items:2,autoplay:!0,mouseDrag:!0,loop:!0},600:{items:2,autoplay:!0,mouseDrag:!0,loop:!0},1e3:{items:5}}}),(owl=$(".student-testimonial-slider")).owlCarousel({items:1,loop:!1,nav:!0,dots:!1,margin:0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".owl-carousel1").owlCarousel({loop:!0,rewind:!0,autoplay:!0,autoplayTimeout:8e3,autoplayHoverPause:!1,checkVisible:!1,animateOut:"fadeOut",animateIn:"fadeIn",margin:0,nav:!1,dots:!1,responsiveClass:!0,responsive:{0:{items:1}}}),(owl=$(".carousel-11")).owlCarousel({items:3,loop:!1,nav:!0,dots:!1,margin:15,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,mouseDrag:!0,responsive:{0:{items:2},600:{items:3},1e3:{items:3}}});


 function closeFunction(){
      var x = document.getElementById("chatbox");
      if (x.style.display === "none") {
        x.style.display = "block";
        //$('.fa-minus').show();
        $('.online-chat').hide();
        $("#iframe_ids").show();
        // Selecting the iframe element

      } else {
        x.style.display = "none";
        $('.online-chat').show();
        $("#iframe_ids").hide();
        // Selecting the iframe element
        //var iframe = document.getElementById("Chatbot_iframe");
        // Adjusting the iframe height onload event
        //iframe.onload = function(){
           // iframe.style.height = 'auto';
        //}
        //$('.fa-plus').show();
      }
    }
    
	 $(document).ready(function () {
            $('#myModal').modal('show');
        });
		
		   /* alt tag implementation 
         $('img').each(function(){
            var $img = $(this);
            var imgPath = $img.prop('src');
            var breakPath = imgPath.split('/');
            var getImageExtension = breakPath[breakPath.length - 1];
            var imgName = getImageExtension.split('.')[0];
            $(this).attr('alt', imgName);
        });*/
/*  End alt tag implementation */
/*No Paper Form Chat*/

setTimeout(function(){
	var s=document.createElement("script");    s.type="text/javascript";    s.async=true; s.defer=true;   s.src="https://chatbot.in5.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/52516246b00d46979/70b3067433a041579e0a303c175da112";    document.body.appendChild(s);

 $(".deferurl").click(function(){
      $(this).attr("href","https://www.youtube.com/channel/UC8KBt4ZO1h8mFoRGhROBb7A");
    });	
},10000);

	
$(window).on('load', function() {
   $("button.btn.btn-secondary").click(function(){
     $(this).parents(".mobhomemodal").addClass("active")
   });
  })