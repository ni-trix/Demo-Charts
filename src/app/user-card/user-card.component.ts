import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  hiddenPart: boolean;
  animUser = false;

  constructor() { }

  displayHiddenPart() {
    this.hiddenPart = !this.hiddenPart;
  }

  userSelected() {
    this.animUser = true;
  }

  ngOnInit() {
    this.hiddenPart = false;
  }

}
