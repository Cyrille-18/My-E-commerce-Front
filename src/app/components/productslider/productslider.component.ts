import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Product } from '../../interface/productinterface'; // Assurez-vous d'avoir ce modèle défini
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productslider',
  imports: [CommonModule],
  templateUrl: './productslider.component.html',
  styleUrl: './productslider.component.css',
})
export class ProductsliderComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;

  products: Product[] = [
    {
      id: 1,
      title: 'The Good Earth® Cotton Slub Polo',
      size: 'Size: US XL / EU 56/4',
      price: 17565,
      imageUrl:
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Classic Fit Oxford Shirt',
      size: 'Size: US L / EU 52/3',
      price: 12890,
      imageUrl:
        'https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Premium Stretch Denim Jeans',
      size: 'Size: US 34 / EU 50',
      price: 19990,
      imageUrl:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Merino Wool Crew Neck Sweater',
      size: 'Size: US M / EU 48/2',
      price: 22450,
      imageUrl:
        'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Lightweight Performance Chinos',
      size: 'Size: US 32 / EU 48',
      price: 15975,
      imageUrl:
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Vintage Wash Graphic T-Shirt',
      size: 'Size: US S / EU 44/1',
      price: 8950,
      imageUrl:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 7,
      title: 'Tailored Fit Blazer',
      size: 'Size: US 42 / EU 52',
      price: 34990,
      imageUrl:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 8,
      title: 'Water-Resistant Field Jacket',
      size: 'Size: US L / EU 52/3',
      price: 29750,
      imageUrl:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 9,
      title: 'Ultra Soft Lounge Hoodie',
      size: 'Size: US M / EU 48/2',
      price: 16495,
      imageUrl:
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=260&h=340&auto=format&fit=crop',
    },
    {
      id: 10,
      title: 'Athletic Fit Performance Polo',
      size: 'Size: US XL / EU 56/4',
      price: 13950,
      imageUrl:
        'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=260&h=340&auto=format&fit=crop',
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
    // Ajuste la valeur de défilement en fonction de la largeur d'écran
    if (window.innerWidth <= 640) {
      this.scrollAmount = 220; // Plus petit sur mobile
    } else {
      this.scrollAmount = 280; // Valeur par défaut
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
