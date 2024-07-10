import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent implements OnInit{
  public title: string;

  constructor(){

    this.title = "Frequently Asked Questions";
    
  }
  ngOnInit(): void {

    //Acordeon
    
    $('.demo').accordion({ multiOpen:false}); /* Puede ser valso o verdadero */

    //Tambien se puede modificar la velocidad de la animacion de la siguiente manera

    //$('.demo').accordion({ duration: 200 });

  }

}
