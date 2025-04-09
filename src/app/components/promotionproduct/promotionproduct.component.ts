import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Promoproduct } from '../../interface/promoproduct';

@Component({
  selector: 'app-promotionproduct',
  imports: [CommonModule],
  templateUrl: './promotionproduct.component.html',
  styleUrl: './promotionproduct.component.css',
})
export class PromotionproductComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;

  products: Promoproduct[] = [
    {
      id: 1,
      title: 'The Good Earth® Cotton Slub Polo',
      size: 'Size: US XL / EU 56/4',
      originalPrice: 17565,
      discountedPrice: 12295,
      discountPercentage: 30,
      badge: 'BEST SELLER',
      imageUrl:
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Classic Fit Oxford Shirt',
      size: 'Size: US L / EU 52/3',
      originalPrice: 12890,
      discountedPrice: 9667,
      discountPercentage: 25,
      imageUrl:
        'https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Premium Stretch Denim Jeans',
      size: 'Size: US 34 / EU 50',
      originalPrice: 19990,
      discountedPrice: 13993,
      discountPercentage: 30,
      badge: 'DERNIÈRES PIÈCES',
      imageUrl:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Merino Wool Crew Neck Sweater',
      size: 'Size: US M / EU 48/2',
      originalPrice: 22450,
      discountedPrice: 15715,
      discountPercentage: 30,
      imageUrl:
        'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=260&h=340&auto=format&fit=crop',
    },
  ];

  currentDot: number = 0;
  scrollAmount: number = 280;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.updateScrollAmount();
    window.addEventListener('resize', () => this.updateScrollAmount());
  }

  updateScrollAmount(): void {
    if (window.innerWidth <= 640) {
      this.scrollAmount = 240;
    } else {
      this.scrollAmount = 300;
    }
  }

  scrollTo(index: number): void {
    this.currentDot = index;
    this.slider.nativeElement.scrollTo({
      left: index * this.scrollAmount,
      behavior: 'smooth',
    });
  }

  onScroll(): void {
    const scrollPosition = this.slider.nativeElement.scrollLeft;
    this.currentDot = Math.round(scrollPosition / this.scrollAmount);
  }

  get dots(): number[] {
    return Array(Math.ceil(this.products.length / 2))
      .fill(0)
      .map((_, i) => i);
  }
}
