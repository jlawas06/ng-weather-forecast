import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent {
  constructor(public auth: AuthService, private router: Router) {}

  onSubmit(city: string) {
    if (city) {
      this.router.navigate(['/weather'], { queryParams: { q: city } });
    }
  }
}
