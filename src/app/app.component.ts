import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appmpok';
  constructor(
  	private router:Router
  	){

  }
    clicked() {
  	this.router.navigateByUrl("/form");																						
  }
}