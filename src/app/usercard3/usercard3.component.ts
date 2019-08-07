import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard3',
  templateUrl: './usercard3.component.html',
  styleUrls: ['./usercard3.component.scss']
})
export class Usercard3Component implements OnInit {

  hiddenPart: boolean;

  constructor() { }

  displayHiddenPart() {
    this.hiddenPart = !this.hiddenPart;
  }

  ngOnInit() {
    this.hiddenPart = false;
  }

}
