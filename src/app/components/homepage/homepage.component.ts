import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  ngOnInit(): void {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
    }, 4000);

    $("#slideshow-facilities > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow-facilities > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow-facilities');
    }, 4000);
  } 

}
