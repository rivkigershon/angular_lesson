import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsToGuessComponent } from './colors-to-guess.component';

describe('ColorsToGuessComponent', () => {
  let component: ColorsToGuessComponent;
  let fixture: ComponentFixture<ColorsToGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsToGuessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsToGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
