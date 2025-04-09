import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionproductComponent } from './promotionproduct.component';

describe('PromotionproductComponent', () => {
  let component: PromotionproductComponent;
  let fixture: ComponentFixture<PromotionproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
