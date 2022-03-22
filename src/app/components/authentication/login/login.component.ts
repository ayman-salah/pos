import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  password = '';
  email = '';
  login(){
    this.route.navigate(['/'])
    // if(this.email.toLowerCase() =='ahmed@gmail.com' && this.password.toLowerCase() == '1111'){
    //   this.route.navigate(['/'])
    // }
    // else{
    //   console.log(this.email.toLowerCase() + ' password >> '+ this.password.toLowerCase() )
    //   alert('email or password invalid')
    // }
  }
  constructor(public route : Router) { }

  ngOnInit(): void {
  }

}
