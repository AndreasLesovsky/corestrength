import { Component, computed, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountService } from '../services/discount.service';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})

export class CheckoutComponent {
  cartService = inject(CartService);
  discountService = inject(DiscountService);
  discountCodeInput: string = '';
  discountApplied: boolean = false;
  errorMessage: string | null = null;

  applyDiscount() {
    const total = this.cartService.cart().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    this.errorMessage = null;

    const discountSuccess = this.discountService.applyDiscountCode(
      this.discountCodeInput,
      total,
      this.cartService.cart()
    );

    if (discountSuccess) {
      this.discountApplied = true;
    } else {
      this.errorMessage = `Gutscheincode "${this.discountCodeInput}" ist ungültig. Bitte überprüfe den Code und versuche es erneut.`;
      this.discountApplied = false;
    }

    this.discountCodeInput = '';
  }

  // Rabatt zurücksetzen
  resetDiscount() {
    this.discountService.resetDiscount();
    this.discountApplied = false;
    this.errorMessage = null;
    this.discountCodeInput = '';
  }

  // Gesamtpreis berechnen
  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.product.price * item.quantity;
    }
    return total;
  });

  // Gesamtpreis + Lieferkosten berechnen
  shippingCost = computed(() => {
    return this.total() > 50 ? 0 : 5; // Kostenloser Versand bei mehr als 50€
  });

  // Finaler Gesamtpreis inklusive Rabatt
  finalTotal = computed(() => {
    const total = this.cartService
      .cart()
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shippingCost = total > 50 ? 0 : 5;
    const discount = this.discountService.discountAmount();

    return (total + shippingCost - discount);
  });

  // Checkoutformular + Bestellung simulieren
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    town: '',
    country: '',
    zip: '',
    sameAddress: false,
    saveInfo: false,
    paymentMethod: '',
    ccName: '',
    ccNumber: '',
    ccExpiration: '',
    ccCvv: ''
  };

  orderSuccess: boolean = false;
  isLoading: boolean = false;

  onSubmit(checkoutForm: any) {
    if (checkoutForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.discountService.resetDiscount();
        this.discountApplied = false;
        this.errorMessage = null;
        this.simulateOrderSuccess();
        this.cartService.clearCart();
        checkoutForm.reset();
        this.isLoading = false;
      }, 2000);
    }
  }

  simulateOrderSuccess() {
    this.orderSuccess = true;
  }

  // bei Verlassen der Seite Gutscheincode zurücksetzen
  ngOnDestroy(): void {
    this.discountService.resetDiscount();
  }
}