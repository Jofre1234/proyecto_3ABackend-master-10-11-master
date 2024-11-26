import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component'; 
import { MatricesComponent } from '../matrices/matrices.component'; 

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    MatricesComponent 
  ],
  providers: []
})
export class AppModule { }