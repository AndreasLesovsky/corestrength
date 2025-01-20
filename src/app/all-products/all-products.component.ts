import { Component, inject, NgModule } from '@angular/core';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  cartService = inject(CartService);
  productsService = inject(ProductsService);
  pages: number[] = [];

  ngOnInit() {
    this.updatePages();
  }

  updatePages() {
    const totalPages = this.productsService.getTotalPages();
    this.pages = Array.from({ length: totalPages }, (_, i) => i); // Erstelle ein Array mit Seitenzahlen
  }
}
