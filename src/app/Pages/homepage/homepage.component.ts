import { Component } from '@angular/core';
import { ProductsliderComponent } from '../../components/productslider/productslider.component';
import { PromotionproductComponent } from '../../components/promotionproduct/promotionproduct.component';

@Component({
  selector: 'app-homepage',
  imports: [ProductsliderComponent, PromotionproductComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
