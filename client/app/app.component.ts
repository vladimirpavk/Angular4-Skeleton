var __moduleName: any;

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FlashBoxComponent } from 'ng2-flashbox';

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
    //this.fb1.flashOnce();
  }

  
}