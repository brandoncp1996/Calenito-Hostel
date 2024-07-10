import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public title: string;
  public subtitle: string;

  constructor(){
    this.title = "About";
    this.subtitle = "What is HostelCali";
  }

}
