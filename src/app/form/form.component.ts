import { Component,OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";

 interface course_interface {
	id:number,
	course_name:string
}
@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit  {
  title = 'form';
  courses:course_interface[] = []
  c:course_interface = {id:4,course_name:"asdf"}
  //this.courses.push(this.c);
    ngOnInit():void{
    	this.courses.push(this.c);
    	this.courses.push({id:5,course_name:"adffgsdf"});
    	
   	}
   	onChange():void{
   		console.log(this.course);
   	}
    
}