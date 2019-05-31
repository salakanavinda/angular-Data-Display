import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerOperationComponent } from './customer-operation/customer-operation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CustomerOperationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
