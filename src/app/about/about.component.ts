import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
