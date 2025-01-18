import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-preview',
  imports: [ProductCardComponent],
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss'],
})

export class ProductPreviewComponent {
  productsService = inject(ProductsService);
  products = this.productsService.randomProducts();
}
