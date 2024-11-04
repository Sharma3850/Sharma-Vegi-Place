import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUnavailableComponent } from './item-unavailable.component';

describe('ItemUnavailableComponent', () => {
  let component: ItemUnavailableComponent;
  let fixture: ComponentFixture<ItemUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemUnavailableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
