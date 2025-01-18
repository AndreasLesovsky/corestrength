import { Component, inject, Input, input } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() item!: CartItem; // Jetzt ist das Item ein CartItem

  cartService = inject(CartService);

  updateQuantity(productId: number, change: number) {
    this.cartService.updateQuantity(productId, change);
  }
}
