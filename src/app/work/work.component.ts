import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

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
