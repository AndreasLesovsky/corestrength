import { Component, inject, input } from '@angular/core';
import { Product } from '../models/products.model';
import { CartService } from '../services/cart.service';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  imports: [ProductCardComponent],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.scss'
})
export class SubcategoryComponent {
  category: string = '';
  subcategory: string = '';
  products: Product[] = [];

  // Injecte die notwendigen Services
  cartService = inject(CartService);
  productsService = inject(ProductsService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // Lese die Parameter aus der URL
    this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.subcategory = params.get('subcategory')!;

      // Hole die gefilterten Produkte basierend auf der Kategorie und Unterkategorie
      this.products = this.productsService.getProductsByCategoryAndSubcategory(this.category, this.subcategory);
    });
  }
}
