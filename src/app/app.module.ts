import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent  // Standalone-компонент добавляется в imports
  ],
  providers: [],
  bootstrap: [AppComponent]  // Запуск standalone-компонента
})
export class AppModule { }





