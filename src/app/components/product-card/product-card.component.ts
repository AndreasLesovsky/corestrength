import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
