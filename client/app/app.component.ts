/// <reference path="../../node_modules/@angular/core/core.d.ts" />
/// <reference path="../../node_modules/ng2-flashbox/index.d.ts" />

var __moduleName: any;

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FlashBoxComponent } from 'commoncomponents';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit{ 

  private vrednost: boolean = true;

  @ViewChild("fb1") fb1: FlashBoxComponent;

  private Button_clicked(): void{
    this.vrednost=!this.vrednost;
  }

  ngOnInit(){
        
  }

  ngAfterViewInit(){
    this.fb1.
    this.fb1.flashOnce();
  }

  
}