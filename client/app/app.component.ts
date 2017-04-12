/// <reference path="../../node_modules/@angular/core/core.d.ts" />

var __moduleName: any;

import { Component, OnInit } from '@angular/core';
@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 

  private vrednost: boolean = true;

  private Button_clicked(): void{
    this.vrednost=!this.vrednost;
  }
}