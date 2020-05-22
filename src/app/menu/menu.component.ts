import { Component, OnInit } from '@angular/core';
import { HardcoderAuthenticationService } from '../service/hardcoder-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn: boolean = false;

  constructor(private hardcodedAuthenticationService: HardcoderAuthenticationService) { }

  ngOnInit() {
   //this.isUserLoggedIn= this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
