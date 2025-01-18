import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';
import { CartItem } from '../models/cart-item.model';
import { DiscountService } from './discount.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  discountService = inject(DiscountService);
  cart = signal<CartItem[]>(this.loadCartFromLocalStorage());

  constructor() {
    effect(() => {
      this.saveCartToLocalStorage();
    });
  }

  private loadCartFromLocalStorage(): CartItem[] {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }

  addToCart(product: Product, event: MouseEvent) {
    const existingItem = this.cart().find(item => item.product.id === product.id);
    if (existingItem) {
      this.updateQuantity(product.id, 1);
    } else {
      this.cart.set([...this.cart(), { product, quantity: 1 }]);
    }
    const targetElement = event.target as HTMLElement;
    const plusIcon = targetElement.querySelector('.fa-plus');

    if (plusIcon) {
      plusIcon.classList.add('icon-animation');

      setTimeout(() => {
        plusIcon.classList.remove('icon-animation');
      }, 300); // Zeit, die mit der CSS Animation übereinstimmt
    }
  }

  removeFromCart(product: Product) {
    this.cart.set(this.cart().filter(item => item.product.id !== product.id));
  }

  // Berechne den Gesamtpreis einzelner Produkte mit mehr als 1 Item im Cart
  total = computed(() => {
    let total = 0;
    for (const item of this.cart()) {
      total += item.product.price * item.quantity;  // Preis * Menge
    }
    return total;
  });

  // Menge des Produkts im Warenkorb ändern
  updateQuantity(productId: number, change: number) {
    const updatedCart = this.cart().map(item => {
      if (item.product.id === productId) {
        const newQuantity = Math.max(0, item.quantity + change);
        if (newQuantity === 0) {
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item !== null);  // Entferne null-Werte aus dem Warenkorb

    this.cart.set(updatedCart);
  }

  clearCart() {
    this.cart.set([]);
  }
}
