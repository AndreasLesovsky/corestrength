import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = signal<Product[]>([
    {
      id: 1,
      imagePath: "product7.webp",
      name: "WheyPro Pure Vanilla (1kg)",
      price: 24.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "2348",
      Category: "Protein & Aminosäuren",
      Subcategory: "Whey Protein",
      stock: 56,
    },
    {
      id: 2,
      imagePath: "product7.webp",
      name: "IsoWhey Max Chocolate (750g)",
      price: 29.99,
      stars: [true, true, true, true, false],
      manufacturer: "John Bold",
      ratingsCount: "92",
      Category: "Protein & Aminosäuren",
      Subcategory: "Whey Protein",
      stock: 0,
    },
    {
      id: 3,
      imagePath: "product7.webp",
      name: "UltraWhey Strawberry Shake (500g)",
      price: 19.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "77",
      Category: "Protein & Aminosäuren",
      Subcategory: "Whey Protein",
      stock: 197,
    },
    {
      id: 4,
      imagePath: "product8.webp",
      name: "VeganPro Green Apple (1kg)",
      price: 34.99,
      stars: [true, true, true, true, true],
      manufacturer: "Pure Vital",
      ratingsCount: "63",
      Category: "Protein & Aminosäuren",
      Subcategory: "Pflanzliche Proteine",
      stock: 0,
    },
    {
      id: 5,
      imagePath: "product8.webp",
      name: "PlantFusion Protein Mix Banana (800g)",
      price: 28.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "878",
      Category: "Protein & Aminosäuren",
      Subcategory: "Pflanzliche Proteine",
      stock: 478,
    },
    {
      id: 6,
      imagePath: "product8.webp",
      name: "BioHemp Vanilla Delight (600g)",
      price: 26.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "682",
      Category: "Protein & Aminosäuren",
      Subcategory: "Pflanzliche Proteine",
      stock: 295,
    },
    {
      id: 7,
      imagePath: "product9.webp",
      name: "SlowCasein Night Chocolate (1kg)",
      price: 32.99,
      stars: [true, true, true, true, true],
      manufacturer: "Pure Vital",
      ratingsCount: "223",
      Category: "Protein & Aminosäuren",
      Subcategory: "Casein Protein",
      stock: 0,
    },
    {
      id: 8,
      imagePath: "product9.webp",
      name: "RecoveryCasein Vanilla Bean (750g)",
      price: 29.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "728",
      Category: "Protein & Aminosäuren",
      Subcategory: "Casein Protein",
      stock: 42,
    },
    {
      id: 9,
      imagePath: "product9.webp",
      name: "ProteinTime Pure Casein (900g)",
      price: 27.99,
      stars: [true, true, true, true, false],
      manufacturer: "John Bold",
      ratingsCount: "967",
      Category: "Protein & Aminosäuren",
      Subcategory: "Casein Protein",
      stock: 214,
    },
    {
      id: 10,
      imagePath: "product2.webp",
      name: "PowerBar ChocoCrunch (45g x 12 Stück)",
      price: 14.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "758",
      Category: "Protein & Aminosäuren",
      Subcategory: "Protein Riegel",
      stock: 23,
    },
    {
      id: 11,
      imagePath: "product2.webp",
      name: "FitSnack Peanut Bliss (60g x 10 Stück)",
      price: 19.99,
      stars: [true, true, true, true, false],
      manufacturer: "Pure Vital",
      ratingsCount: "385",
      Category: "Protein & Aminosäuren",
      Subcategory: "Protein Riegel",
      stock: 87,
    },
    {
      id: 12,
      imagePath: "product2.webp",
      name: "HighPro Berry Boost (50g x 15 Stück)",
      price: 24.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "585",
      Category: "Protein & Aminosäuren",
      Subcategory: "Protein Riegel",
      stock: 212,
    },
    {
      id: 13,
      imagePath: "product10.webp",
      name: "MassGainer ChocoNut (4kg)",
      price: 49.99,
      stars: [true, true, true, true, false],
      manufacturer: "CoreStrength",
      ratingsCount: "185",
      Category: "Leistung & Energie",
      Subcategory: "Weight Gainer",
      stock: 388,
    },
    {
      id: 14,
      imagePath: "product10.webp",
      name: "BulkUp Max Banana Split (3kg)",
      price: 39.99,
      stars: [true, true, true, true, true],
      manufacturer: "John Bold",
      ratingsCount: "27",
      Category: "Leistung & Energie",
      Subcategory: "Weight Gainer",
      stock: 177,
    },
    {
      id: 15,
      imagePath: "product10.webp",
      name: "UltraMass Vanilla Dream (2.5kg)",
      price: 34.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "50",
      Category: "Leistung & Energie",
      Subcategory: "Weight Gainer",
      stock: 0,
    },
    {
      id: 16,
      imagePath: "product12.webp",
      name: "CarboPower Neutral (1kg)",
      price: 19.99,
      stars: [true, true, true, true, true],
      manufacturer: "Pure Vital",
      ratingsCount: "710",
      Category: "Leistung & Energie",
      Subcategory: "Kohlenhydrate & Carb-Supplements",
      stock: 211,
    },
    {
      id: 17,
      imagePath: "product11.webp",
      name: "EnergyMax Maltodextrin (500g)",
      price: 14.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "268",
      Category: "Leistung & Energie",
      Subcategory: "Kohlenhydrate & Carb-Supplements",
      stock: 312,
    },
    {
      id: 18,
      imagePath: "product12.webp",
      name: "FastFuel DextroCharge (2kg)",
      price: 24.99,
      stars: [true, true, true, true, false],
      manufacturer: "John Bold",
      ratingsCount: "852",
      Category: "Leistung & Energie",
      Subcategory: "Kohlenhydrate & Carb-Supplements",
      stock: 156,
    },
    {
      id: 19,
      imagePath: "product6.webp",
      name: "NitroBoost LemonRush (250g)",
      price: 19.99,
      stars: [true, true, true, true, true],
      manufacturer: "Pure Vital",
      ratingsCount: "340",
      Category: "Leistung & Energie",
      Subcategory: "Pre-Workout-Supplements",
      stock: 41,
    },
    {
      id: 20,
      imagePath: "product6.webp",
      name: "PreXplode Cola Berry (300g)",
      price: 24.99,
      stars: [true, true, true, true, false],
      manufacturer: "CoreStrength",
      ratingsCount: "3428",
      Category: "Leistung & Energie",
      Subcategory: "Pre-Workout-Supplements",
      stock: 102,
    },
    {
      id: 21,
      imagePath: "product6.webp",
      name: "EnergyFocus Tropical Fire (350g)",
      price: 29.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "348",
      Category: "Leistung & Energie",
      Subcategory: "Pre-Workout-Supplements",
      stock: 195,
    },
    {
      id: 22,
      imagePath: "product3.webp",
      name: "CreatinePure Monohydrate (500g)",
      price: 14.99,
      stars: [true, true, true, true, true],
      manufacturer: "Pure Vital",
      ratingsCount: "238",
      Category: "Leistung & Energie",
      Subcategory: "Kreatin & Krealkalinprodukte",
      stock: 0,
    },
    {
      id: 23,
      imagePath: "product4.webp",
      name: "KreAlk PowerCaps (200 Kapseln)",
      price: 24.99,
      stars: [true, true, true, true, true],
      manufacturer: "John Bold",
      ratingsCount: "559",
      Category: "Leistung & Energie",
      Subcategory: "Kreatin & Krealkalinprodukte",
      stock: 0,
    },
    {
      id: 24,
      imagePath: "product3.webp",
      name: "CreatinePro Micronized Berry (300g)",
      price: 19.99,
      stars: [true, true, true, true, false],
      manufacturer: "CoreStrength",
      ratingsCount: "2998",
      Category: "Leistung & Energie",
      Subcategory: "Kreatin & Krealkalinprodukte",
      stock: 98,
    },
    {
      id: 25,
      imagePath: "product5.webp",
      name: "BCAA Turbo Boost (300g)",
      price: 22.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "189",
      Category: "Protein & Aminosäuren",
      Subcategory: "BCAA",
      stock: 120,
    },
    {
      id: 26,
      imagePath: "product5.webp",
      name: "BCAA+ Amino Recovery (400g)",
      price: 27.49,
      stars: [true, true, true, true, false],
      manufacturer: "Pure Vital",
      ratingsCount: "58",
      Category: "Protein & Aminosäuren",
      Subcategory: "BCAA",
      stock: 320,
    },
    {
      id: 27,
      imagePath: "product5.webp",
      name: "BCAA Complex 2:1:1 (500g)",
      price: 19.99,
      stars: [true, true, true, true, true],
      manufacturer: "John Bold",
      ratingsCount: "753",
      Category: "Protein & Aminosäuren",
      Subcategory: "BCAA",
      stock: 95,
    },
    {
      id: 28,
      imagePath: "product1.webp",
      name: "EnergyBar Boost (45g x 15 Stück)",
      price: 17.99,
      stars: [true, true, true, true, true],
      manufacturer: "CoreStrength",
      ratingsCount: "1124",
      Category: "Leistung & Energie",
      Subcategory: "Energie Riegel",
      stock: 342,
    },
    {
      id: 29,
      imagePath: "product1.webp",
      name: "PowerSnack Energy Bites (60g x 10 Stück)",
      price: 21.49,
      stars: [true, true, true, true, false],
      manufacturer: "Pure Vital",
      ratingsCount: "503",
      Category: "Leistung & Energie",
      Subcategory: "Energie Riegel",
      stock: 198,
    },
    {
      id: 30,
      imagePath: "product1.webp",
      name: "ChargeUp Energy Bar (50g x 20 Stück)",
      price: 19.49,
      stars: [true, true, true, true, true],
      manufacturer: "John Bold",
      ratingsCount: "930",
      Category: "Leistung & Energie",
      Subcategory: "Energie Riegel",
      stock: 265,
    },
  ]);

  // Für die product-preview Section
  randomProducts = signal<Product[]>(this.getRandomProducts());

  getRandomProducts() {
    const shuffled = [...this.products()].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4); // Nimm die ersten 6 Elemente
  }

  // Für die Navigation zu den Unterkategorieseiten
  getProductsByCategoryAndSubcategory(category: string, subcategory: string): Product[] {
    return this.products().filter(
      (product) =>
        product.Category === category && product.Subcategory === subcategory
    );
  }

  // Paginierte Produkte
  pageSize = 8;
  currentPage = signal<number>(1);

  getPagedProducts() {
    const start = (this.currentPage() - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.products().slice(start, end);
  }

  // Gesamtanzahl der Seiten
  getTotalPages() {
    return Math.ceil(this.products().length / this.pageSize);
  }

  // Vorherige Seite
  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((value) => value - 1);
    }
  }

  // Nächste Seite
  nextPage() {
    if (this.currentPage() < this.getTotalPages()) {
      this.currentPage.update((value) => value + 1);
    }
  }

  onPageChange(page: number) {
    this.currentPage.set(page + 1);
  }

}
