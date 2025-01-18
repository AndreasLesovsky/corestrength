import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  cartService = inject(CartService);
  themeToggler: HTMLElement | null = null;
  sunIcon: HTMLElement | null = null;
  moonIcon: HTMLElement | null = null;
  themeText: HTMLElement | null = null;
  htmlElement: HTMLElement;

  constructor(private renderer: Renderer2) {
    this.htmlElement = document.documentElement;
  }

  ngOnInit(): void {
    // Initialisiere DOM-Elemente über Renderer2
    this.themeToggler = document.getElementById('theme-toggler');
    this.sunIcon = document.querySelector('.sun-icon');
    this.moonIcon = document.querySelector('.moon-icon');
    this.themeText = document.getElementById('theme-text');
    this.checkStoredTheme();
  }

  setTheme(theme: 'light' | 'dark'): void {
    // Setze das data-bs-theme Attribut über Renderer2
    this.renderer.setAttribute(this.htmlElement, 'data-bs-theme', theme);

    // Icons und Text aktualisieren
    if (theme === 'dark') {
      if (this.sunIcon) this.renderer.addClass(this.sunIcon, 'visually-hidden');
      if (this.moonIcon) this.renderer.removeClass(this.moonIcon, 'visually-hidden');
      if (this.themeText) this.themeText.textContent = 'Wechseln zu Light Mode';
    } else {
      if (this.sunIcon) this.renderer.removeClass(this.sunIcon, 'visually-hidden');
      if (this.moonIcon) this.renderer.addClass(this.moonIcon, 'visually-hidden');
      if (this.themeText) this.themeText.textContent = 'Wechseln zu Dark Mode';
    }

    localStorage.setItem('theme', theme);
  }

  checkStoredTheme(): void {
    const storedTheme: string | null = localStorage.getItem('theme');
    if (storedTheme) {
      this.setTheme(storedTheme as 'light' | 'dark');
    } else {
      const systemPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    }
  }

  toggleTheme(): void {
    if (this.themeToggler) {
      const currentTheme: string | null = this.htmlElement.getAttribute('data-bs-theme');
      if (currentTheme === 'light') {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    }
  }

  hideCollapse() {
    const collapseElements = [
      document.getElementById('collapseMegaMenu'),
      document.getElementById('collapseMegaMenuMobile'),
      document.getElementById('navbarSupportedContent')
    ];

    collapseElements.forEach((collapseElement) => {
      if (collapseElement && collapseElement.classList.contains('show')) {
        const bsCollapse = new (window as any).bootstrap.Collapse(collapseElement, {
          toggle: false,
        });

        bsCollapse.hide();
      }
    });
  }
}