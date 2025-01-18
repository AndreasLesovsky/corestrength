import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToTop() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 250); // Verzögerung von 250 ms
  }
  constructor() { }
}
