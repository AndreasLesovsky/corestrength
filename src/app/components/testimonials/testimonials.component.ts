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
    // Überprüfen, ob bereits ein Intervall läuft
    if (this.intervalId) {
      return; // Verhindert, dass ein weiteres Intervall gestartet wird
    }

    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.totalItems; // Nächster Index, zyklisch
    }, 5000); // Alle x Sekunden wechseln
  }

  stopAutoToggle(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Intervall beenden, wenn es läuft
      this.intervalId = null; // Setze das Intervall zurück
    }
  }

  pauseAutoToggle(): void {
    this.stopAutoToggle(); // Automatischen Wechsel anhalten

    // Nach 5 Sekunden den Wechsel automatisch wieder aktivieren
    this.pauseTimeoutId = setTimeout(() => {
      this.startAutoToggle();
    }, 5000); // 5 Sekunden Pause
  }

  toggleAccordion(index: number): void {
    if (this.activeIndex === index) {
      return; // Verhindert, dass alle Akkordeons geschlossen werden
    }

    this.activeIndex = index; // Setzt den aktiven Index
    this.pauseAutoToggle();   // Automatischen Wechsel pausieren
  }

  ngOnInit(): void {
    this.totalItems = 3; // Setze hier die tatsächliche Anzahl deiner Akkordeons
    this.startAutoToggle();
  }
}
