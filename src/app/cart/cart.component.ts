import { Component, computed, inject, input, signal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../models/products.model';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { DiscountService } from '../services/discount.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CartItemComponent, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  product = input.required<Product>();
  checkoutError: boolean = false;
  cartService = inject(CartService);
  scrollService = inject(ScrollService);
  
  validateCheckout(): void {
    if (this.cartService.cart().length === 0) {
      this.checkoutError = true;
      setTimeout(() => (this.checkoutError = false), 3000); // Fehlermeldung nach 3 Sekunden ausblenden
    }
  }
}
