import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcoderAuthenticationService } from '../service/hardcoder-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="myname"
  password=""
  errormessage="Invalid message"
  invalidLogin = false;
  

  //router 
  //angular.giveMeRouter

  constructor(private router:Router,
     private hardcodedAuthenticationService: HardcoderAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){

    //if(this.username === "meola" && this.password ==='meola'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome',this.username]) 
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
    //console.log(this.username);
  }

}
