import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-private-rooms',
  templateUrl: './private-rooms.component.html',
  styleUrl: './private-rooms.component.css'
})
export class PrivateRoomsComponent implements OnInit {
  public title: string;

  constructor(){
    this.title = "Private Rooms";
  }

  ngOnInit(): void {

    $("#private-rooms").click(function(e: any){
      e.preventDefault();
      /*
      $("header").css("background","rgb(239, 239, 237);");
      */
    })

    /* -- Privat 1 --*/

    $('#privat-1').bbslider({
      auto: false,
      timer:3000,
      loop:true,
      controls: true,
      controlsText:[                        

        '<div class="arrow left"><a class="prev control" href="#"></a></div>',

        '<div class="arrow right"><a class="next control" href="#"></a></div>'
                
      ],
      autoHeight: false   
    });

    $('#details-open-1').click(() => {
      $('#info-privat-1').toggleClass('fullscreen');
    });

    $('#info-privat-1').click(() => {
      $("#details-open-1").click();
      console.log("funciona");
    });
    
    /* -- Privat 2 --*/

    $('#privat-2').bbslider({
      auto: false,
      timer:3000,
      loop:true,
      controls: true,
      controlsText:[                        

        '<div class="arrow left"><a class="prev control" href="#"></a></div>',

        '<div class="arrow right"><a class="next control" href="#"></a></div>'
                
      ],
      autoHeight: false      
    });

    $('#details-open-2').click(() => {
      $('#info-privat-2').toggleClass('fullscreen');
    });

    $('#info-privat-2').click(() => {
      $("#details-open-2").click();
      console.log("funciona");
    });

    /* -- Privat 3 --*/

    $('#privat-3').bbslider({
      auto: false,
      timer:3000,
      loop:true,
      controls: true,
      controlsText:[                        

        '<div class="arrow left"><a class="prev control" href="#"></a></div>',

        '<div class="arrow right"><a class="next control" href="#"></a></div>'
                
      ],
      autoHeight: false      
    });

    $('#details-open-3').click(() => {
      $('#info-privat-3').toggleClass('fullscreen');
    });

    $('#info-privat-3').click(() => {
      $("#details-open-3").click();
      console.log("funciona");
    });

    /* -- Privat 4 --*/

    $('#privat-4').bbslider({
      auto: false,
      timer:3000,
      loop:true,
      controls: true,
      controlsText:[                        

        '<div class="arrow left"><a class="prev control" href="#"></a></div>',

        '<div class="arrow right"><a class="next control" href="#"></a></div>'
                
      ],
      autoHeight: false      
    });

    $('#details-open-4').click(() => {
      $('#info-privat-4').toggleClass('fullscreen');
    });

    $('#info-privat-4').click(() => {
      $("#details-open-4").click();
      console.log("funciona");
    });

  }

}
