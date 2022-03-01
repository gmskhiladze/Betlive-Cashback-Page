import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RullesComponent } from './rulles.component';

describe('RullesComponent', () => {
  let component: RullesComponent;
  let fixture: ComponentFixture<RullesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RullesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RullesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
