import { NgModule } from '@angular/core';
// core modules
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// root component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  // root component
    AppComponent
  ],
  imports: [
    // core modules
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
