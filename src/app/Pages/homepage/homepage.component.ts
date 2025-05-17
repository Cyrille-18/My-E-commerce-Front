import { Component } from '@angular/core';
import { ProductsliderComponent } from '../../components/productslider/productslider.component';
import { PromotionproductComponent } from '../../components/promotionproduct/promotionproduct.component';
import { CategorycardComponent } from '../../components/categorycard/categorycard.component';

@Component({
  selector: 'app-homepage',
  imports: [
    ProductsliderComponent,
    PromotionproductComponent,
    CategorycardComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
