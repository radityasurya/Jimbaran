import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
