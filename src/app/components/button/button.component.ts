import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clickHandler(event: MouseEvent) {
    event.preventDefault();
    window.open('https://www.betlive.com/ka/slots#egt');
  }
}
