import { GoogleMapsModule } from '@angular/google-maps';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})

export class ContactComponent implements OnInit {
  
  public title: string;

  //Email
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: ''
  });

    //Titulo
  constructor( private fb: FormBuilder){
    this.title = "Contact";
  }

  //Enviar los correos
  async send(){
    emailjs.init('PoBendgaQ9oAMOuyM');
    let response = await emailjs.send("service_y4c52r3","template_b2x5bg8",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
      });

      alert('Message has been sent.');
      this.form.reset();
  }

  ngOnInit(): void {
    //Cambiar color de menu
    $("#contact").click(function(e: any){
      e.preventDefault();
      /*
      $("header").css("background","white");
      */
    });
    // Add event listener on form container...
    const submit = document.getElementsByClassName("container-contact")[0];

    submit.addEventListener('submit', (e)=>{
      e.preventDefault();
      console.log("Clicked");

    })

  }


}


