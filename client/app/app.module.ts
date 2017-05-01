/// <reference path="../../node_modules/@angular/common/common.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CommonComponentsModule } from 'ng2-flashbox';

@NgModule({
  imports:      [ 
                  CommonComponentsModule,
                  BrowserModule                           
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }