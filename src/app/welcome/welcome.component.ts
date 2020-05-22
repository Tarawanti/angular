//importy 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';
//import {AppComponent} from '../app.component';

//@ComponentScan
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootApp implements SomeInterface
export class WelcomeComponent implements OnInit {

  message: string = 'some welcome'
  welcomeMessageFromService:string
  name=''

  //Dependency, activateroute
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  //void init 
  ngOnInit() :void {
    
    console.log(this.message)
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
        response => this.handleSuccessfulResponse(response)
    );
    console.log('last lline of getwelcomemessage');
    //console.log("get welcome message")
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message
    //console.log(response);
    //console.log(response.message)
  }

}
