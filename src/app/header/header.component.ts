import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


 public ngOnInit() {
  function scrollNav() {
    $('.js-scroll-trigger').click(function(){  
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 160
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNav();
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  
  }

}
