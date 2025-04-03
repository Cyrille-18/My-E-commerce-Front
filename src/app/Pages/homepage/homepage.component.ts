import { Component } from '@angular/core';
import { ProductsliderComponent } from '../../components/productslider/productslider.component'; // Importez le composant si nécessaire, sinon supprimez cette ligne

@Component({
  selector: 'app-homepage',
  imports: [ProductsliderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
