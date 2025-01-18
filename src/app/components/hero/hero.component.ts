import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollService = inject(ScrollService);
}