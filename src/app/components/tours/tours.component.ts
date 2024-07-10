import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})

export class ToursComponent implements OnInit {
  public title: string;

  constructor(){
    this.title = "Tours and Nearby Places";
  }

  ngOnInit(): void {

    $("#tours").click(function(e: any){
      e.preventDefault();
      /*
      $("header").css("background","brown");
      */
    });
    
  }

}
