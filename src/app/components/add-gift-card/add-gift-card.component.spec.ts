import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGiftCardComponent } from './add-gift-card.component';

describe('AddGiftCardComponent', () => {
  let component: AddGiftCardComponent;
  let fixture: ComponentFixture<AddGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGiftCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
