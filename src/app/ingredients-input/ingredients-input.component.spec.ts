import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsInputComponent } from './ingredients-input.component';

describe('IngredientsInputComponent', () => {
  let component: IngredientsInputComponent;
  let fixture: ComponentFixture<IngredientsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
