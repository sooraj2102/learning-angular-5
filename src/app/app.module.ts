import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FormComponent} from './form/form.component';
import { ListComponent } from './list/list.component';

const route:Routes = [
 {
 	path:"form",
 	component: FormComponent,

 },{
 	path:'',
 	component: AppComponent,
 },
 {
 	path:"**",
 	component: FormComponent
 }	
]

@NgModule({
  declarations: [
    AppComponent, FormComponent, ListComponent
  ],
  imports: [
  RouterModule.forRoot(route),
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
