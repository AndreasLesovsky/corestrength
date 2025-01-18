import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { FeatureComponent } from '../components/feature/feature.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { ProductPreviewComponent } from '../components/product-preview/product-preview.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeatureComponent, TestimonialsComponent, ProductPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
