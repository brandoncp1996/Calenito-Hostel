import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})

export class ActivitiesComponent implements OnInit {
  public title: string;

  constructor(){
    this.title = "Activities";
  }

  ngOnInit(): void {
    
    $("#activities").click(function(e: any){
      e.preventDefault();
      /*
      $("header").css("background","brown");
      */
    });
    
  }

}
