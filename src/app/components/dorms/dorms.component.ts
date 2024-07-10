import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dorms',
  templateUrl: './dorms.component.html',
  styleUrl: './dorms.component.css'
})
export class DormsComponent implements OnInit {
  public title: string;

  constructor(){
    this.title = "Dorms";
  }

  ngOnInit(): void {

    $("#dorms").click(function(e: any){
      e.preventDefault();
      /*
      $("header").css("background","blue");
      */
    });

    /* -- Dorm 1 --*/

    $('#dorm-1').bbslider({
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

    $('#details-open-dorm-1').click(() => {
      $('#info-dorm-1').toggleClass('fullscreen');
    });

    $('#info-dorm-1').click(() => {
      $("#details-open-dorm-1").click();
    });
    
    /* -- Dorm 2 --*/

    $('#dorm-2').bbslider({
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

    $('#details-open-dorm-2').click(() => {
      $('#info-dorm-2').toggleClass('fullscreen');
    });

    $('#info-dorm-2').click(() => {
      $("#details-open-dorm-2").click();
    });

    /* -- Dorm 3 --*/

    $('#dorm-3').bbslider({
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

    $('#details-open-dorm-3').click(() => {
      $('#info-dorm-3').toggleClass('fullscreen');
    });

    $('#info-dorm-3').click(() => {
      $("#details-open-dorm-3").click();
    });

    /* -- Dorm 4 --*/

    $('#dorm-4').bbslider({
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

    $('#details-open-dorm-4').click(() => {
      $('#info-dorm-4').toggleClass('fullscreen');
    });

    $('#info-dorm-4').click(() => {
      $("#details-open-dorm-4").click();
    });

    /* -- Dorm 5 --*/

    $('#dorm-5').bbslider({
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

    $('#details-open-dorm-5').click(() => {
      $('#info-dorm-5').toggleClass('fullscreen');
    });

    $('#info-dorm-5').click(() => {
      $("#details-open-dorm-5").click();
    });

  }

}
