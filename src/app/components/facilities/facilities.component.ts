import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent implements OnInit {
  public title: string;

  constructor(){
    this.title = "Facilities";
  }

  ngOnInit(): void {

    $("#facilities").click(function(e: any){
      e.preventDefault();
      /*
      $("header").css("background","black");
      */
    })

    /* ---------- TEXTO DE CADA FACILITIE ----------*/

    // facilitie 1

    /* cuando toco la imagen*/
    $('#facilitie-1 img').hover(function() {
      $('#text-facilitie-1').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-1').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-1').hover(function() {
      $('#text-facilitie-1').css('display', 'block');
    }, function() {

      $('#text-facilitie-1').css('display', '');
    });

    // facilitie 2

    /* cuando toco la imagen*/
    $('#facilitie-2 img').hover(function() {
      $('#text-facilitie-2').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-2').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-2').hover(function() {
      $('#text-facilitie-2').css('display', 'block');
    }, function() {

      $('#text-facilitie-2').css('display', '');
    });

    // facilitie 3

    /* cuando toco la imagen*/
    $('#facilitie-3 img').hover(function() {
      $('#text-facilitie-3').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-3').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-3').hover(function() {
      $('#text-facilitie-3').css('display', 'block');
    }, function() {

      $('#text-facilitie-3').css('display', '');
    });

    // facilitie 4

    /* cuando toco la imagen*/
    $('#facilitie-4 img').hover(function() {
      $('#text-facilitie-4').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-4').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-4').hover(function() {
      $('#text-facilitie-4').css('display', 'block');
    }, function() {

      $('#text-facilitie-4').css('display', '');
    });

    // facilitie 5

    /* cuando toco la imagen*/
    $('#facilitie-5 img').hover(function() {
      $('#text-facilitie-5').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-5').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-5').hover(function() {
      $('#text-facilitie-5').css('display', 'block');
    }, function() {

      $('#text-facilitie-5').css('display', '');
    });

    // facilitie 6

    /* cuando toco la imagen*/
    $('#facilitie-6 img').hover(function() {
      $('#text-facilitie-6').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-6').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-6').hover(function() {
      $('#text-facilitie-6').css('display', 'block');
    }, function() {

      $('#text-facilitie-6').css('display', '');
    });

    // facilitie 7

    /* cuando toco la imagen*/
    $('#facilitie-7 img').hover(function() {
      $('#text-facilitie-7').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-7').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-7').hover(function() {
      $('#text-facilitie-7').css('display', 'block');
    }, function() {

      $('#text-facilitie-7').css('display', '');
    });

    // facilitie 8

    /* cuando toco la imagen*/
    $('#facilitie-8 img').hover(function() {
      $('#text-facilitie-8').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-8').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-8').hover(function() {
      $('#text-facilitie-8').css('display', 'block');
    }, function() {

      $('#text-facilitie-8').css('display', '');
    });

    // facilitie 9

    /* cuando toco la imagen*/
    $('#facilitie-9 img').hover(function() {
      $('#text-facilitie-9').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-9').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-9').hover(function() {
      $('#text-facilitie-9').css('display', 'block');
    }, function() {

      $('#text-facilitie-9').css('display', '');
    });
    

    // facilitie 10

    /* cuando toco la imagen*/
    $('#facilitie-10 img').hover(function() {
      $('#text-facilitie-10').css('display', 'block');
    }, function() {
      // on mouseout, reset the background colour
      $('#text-facilitie-10').css('display', '');
    });
  
    //cuando el mismo texto 
    $('#container-text-facilities-10').hover(function() {
      $('#text-facilitie-10').css('display', 'block');
    }, function() {

      $('#text-facilitie-10').css('display', '');
    });

    
    
    /*--------------------------------------------------------------------------------------*/

    /* funcionamiento general cuando hacemos scrolling o cuando estamos encima del texto*/

    /*cuando el mismo texto */
    /*
    $('.container-text-facilities').hover(function() {
      $('.text-facilitie').css('display', 'block');
    }, function() {

      $('.text-facilitie').css('display', '');
    });
    */
    $(window).on('mousewheel', function(){
      $('.text-facilitie').css('display', 'none');
    });

    



    /*
    
    $('.js-dropdown-item').dropdownLayer({
      elemSelector: "js-dropdown-item",
      containerClass: "js-dropdown-items",
      descriptionClass: "js-description",
      dropdownClass: "js-dropdown",
      arrowClass: "js-dropdown-arrow",
      dropdownContentClass: "js-dropdown-content",
      disableDropdownClass: "js-dropdown-disable",
      slideUpSpeed: 300,
      slideDownSpeed: 300,
      useSlideDown: false,
      useSlideUp: false,
      transitionEffect: 'swing',
      callOnCompleteHide: function() {},
      callOnCompleteShow: function() {}
    });
    
    */
  }

}

