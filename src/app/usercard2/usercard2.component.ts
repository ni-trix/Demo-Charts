import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard2',
  templateUrl: './usercard2.component.html',
  styleUrls: ['./usercard2.component.scss']
})
export class Usercard2Component implements OnInit {

  hiddenPart: boolean;

  constructor() { }

  displayHiddenPart() {
    this.hiddenPart = !this.hiddenPart;
  }

  ngOnInit() {
    this.hiddenPart = false;
  }

}
