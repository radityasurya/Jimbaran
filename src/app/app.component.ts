import { Component, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NgSemanticModule } from 'ng-semantic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  user: FormControl = new FormControl();
  
  @ViewChild('invertedSidebar') sidebar;

  ngOnInit(){
  }
}