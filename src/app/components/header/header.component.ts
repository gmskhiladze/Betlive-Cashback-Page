import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() language = new EventEmitter<string>();

  public isScroll: boolean | undefined;
  public isActive: { ge: boolean; ru: boolean; en: boolean };

  constructor() {
    this.isActive = { ge: true, ru: false, en: false };
  }

  ngOnInit(): void {
    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      this.isScroll =
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
    };
  }

  // background-color: #20242ea6;

  getActiveLanguage(obj: any): any {
    for (const objKey in obj) {
      if (obj[objKey]) {
        return objKey.toString();
      }
    }
  }

  changeLAng(event: any) {
    if (event.target.parentNode.classList.contains('ru')) {
      this.isActive = { ge: false, ru: true, en: false };
    }
    if (event.target.parentNode.classList.contains('en')) {
      this.isActive = { ge: false, ru: false, en: true };
    }
    if (event.target.parentNode.classList.contains('ge')) {
      this.isActive = { ge: true, ru: false, en: false };
    }

    this.language.next(this.getActiveLanguage(this.isActive));
    // console.log(this.isActive)
    // console.log(this.getActiveLanguage(this.isActive))
    // console.log(event.target.parentNode)
  }
}
