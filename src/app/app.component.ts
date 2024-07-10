import { Component, OnInit  } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'hostelCali-angular';

  ngOnInit(): void {

    $(".closeSidebarMenu a").click(function(e: any){
      e.preventDefault();
        //Darle click al boton desde menu desde la lista de opciones
        $(".sidebarIconToggle").click();
    });

  }

}
