import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public classNameChange: boolean;

  public getActiveLanguage(language: string) {
    this.translate.use(language);
  }

  title = 'Betlive-Cashback-Page';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ge');
    // translate.use('EN');
    this.classNameChange = false;
  }

  onResize(event: any) {
    if (window.innerWidth <= 992) {
      this.classNameChange = true;
    } else {
      this.classNameChange = false;
    }
  }
}
