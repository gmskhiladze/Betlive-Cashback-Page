import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public num: number;

  constructor() {
    this.num = 0;
  }

  ngOnInit(): void {}

  slideLeft() {
    if (this.num) {
      document
        .getElementById(`element${this.num - 1}`)
        ?.classList.add('card-vissible-left');
      document
        .getElementById(`element${this.num}`)
        ?.classList.add('card-vissible');
      document
        .getElementById(`element${this.num + 1}`)
        ?.classList.add('card-vissible-right');
    }
  }

  slideRight() {
    // document.getElementById(`element${this.num+1}`)?.classList.add("right");
  }
}
