import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      img: 'https://i.imgur.com/G1pXs7D.jpg',
      name: 'Maximilian Müller',
      position: 'Fitnesscoach, BodyPower',
      title: 'Verbesserte meine Leistung im Training',
      stars: [true, true, true, true, false],
      content:
        'Seitdem ich die Supplements von CoreStrength benutze, habe ich eine deutliche Leistungssteigerung im Training bemerkt. Besonders die Aminosäuren und Pre-Workout-Produkte haben mir geholfen, meine Ausdauer und Intensität zu verbessern. Kann ich nur empfehlen!',
    },
    {
      img: 'https://i.imgur.com/udGH5tO.jpg',
      name: 'Anna Schmidt',
      position: 'Personal Trainerin',
      title: 'Top Qualität und schnelle Ergebnisse',
      stars: [true, true, true, true, true],
      content:
        'Ich habe schon viele verschiedene Marken ausprobiert, aber CoreStrength hat mich wirklich überzeugt. Die Proteinshakes schmecken nicht nur, sondern haben auch echte Ergebnisse geliefert. Mein Muskelaufbau hat sich spürbar verbessert und ich fühle mich insgesamt fitter.',
    },
    {
      img: 'https://i.imgur.com/Uz4FjGZ.jpg',
      name: 'Susanne Weber',
      position: 'Fitness-Enthusiastin',
      title: 'Hilft mir, meine Fitnessziele zu erreichen',
      stars: [true, true, true, true, false],
      content:
        'Die Supplements von CoreStrength haben mir geholfen, mein Fitnesslevel auf das nächste Level zu heben. Besonders die BCAAs und das Whey Protein sind super effektiv. Die Ergebnisse sind sichtbar, und ich fühle mich stärker und energiegeladener als je zuvor.',
    },
  ];

  activeIndex: number = 0;
  totalItems: number = 3;
  intervalId: any;
  pauseTimeoutId: any;

  startAutoToggle(): void {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.totalItems;
    }, 5000);
  }

  stopAutoToggle(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  pauseAutoToggle(): void {
    this.stopAutoToggle();

    this.pauseTimeoutId = setTimeout(() => {
      this.startAutoToggle();
    }, 5000);
  }

  toggleAccordion(index: number): void {
    if (this.activeIndex === index) {
      return; // Verhindert, dass alle Akkordeons geschlossen werden
    }

    this.activeIndex = index;
    this.pauseAutoToggle();
  }

  ngOnInit(): void {
    this.totalItems = 3;
    this.startAutoToggle();
  }
}
