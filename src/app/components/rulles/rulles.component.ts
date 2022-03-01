import { Component, OnInit } from '@angular/core';
import rules from '../../../assets/rules.json';

@Component({
  selector: 'app-rulles',
  templateUrl: './rulles.component.html',
  styleUrls: ['./rulles.component.scss'],
})
export class RullesComponent implements OnInit {
  public rules: any = rules;

  constructor() {}

  ngOnInit(): void {}
}
