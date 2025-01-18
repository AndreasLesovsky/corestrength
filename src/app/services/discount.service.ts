import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DiscountService {
  discountCode = signal<string | null>(null);
  discountAmount = signal<number>(0);

  // Rabatt setzen
  applyDiscountCode(code: string, total: number, cart: any[]) {
    const normalizedCode = code.trim().toUpperCase();
    let discount = 0;

    switch (normalizedCode) {
      case 'FITNESS20':
        discount = total * 0.2; // 20% Rabatt
        break;
      case 'SUPPLEMENT10':
        discount = total * 0.1; // 10% Rabatt
        break;
      case 'HEALTHY15':
        if (total > 100) {
          discount = total * 0.15; // 15% Rabatt über 100€
        }
        break;
      case 'ENERGY25':
        discount = cart
          .filter((item) => item.product.Subcategory === 'Energie Riegel')
          .reduce((sum, item) => sum + item.product.price * item.quantity * 0.25, 0);
        break;
      case 'GAINS30':
        discount = cart
          .filter((item) => item.product.Subcategory === 'Weight Gainer')
          .reduce((sum, item) => sum + item.product.price * item.quantity * 0.3, 0);
        break;
      default:
        discount = 0;
    }

    this.discountCode.set(normalizedCode);
    this.discountAmount.set(discount);

    if (discount > 0) {
      this.discountAmount.set(discount);  // Rabattbetrag setzen
      return true;  // Rabattcode erfolgreich angewendet
    }
  
    return false;  // Kein Rabatt angewendet
  }
  // Rabatt-Code und Betrag zurücksetzen
  resetDiscount() {
    this.discountCode.set(null);
    this.discountAmount.set(0);
  }
}
