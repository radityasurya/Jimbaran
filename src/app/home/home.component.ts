import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isCompleted: boolean = false;

  constructor() { this.complete(); }

  ngOnInit() {
  }
  complete() {
    setTimeout(() => {
      this.isCompleted = true;
    }, 500);
  }
}
