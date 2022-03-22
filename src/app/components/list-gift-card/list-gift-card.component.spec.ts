import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGiftCardComponent } from './list-gift-card.component';

describe('ListGiftCardComponent', () => {
  let component: ListGiftCardComponent;
  let fixture: ComponentFixture<ListGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGiftCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
