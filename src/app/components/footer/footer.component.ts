import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  scrollService = inject(ScrollService);
}
