import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe({
      next: (isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigateByUrl('/home');
        }
      },
    });
  }

  onLogin() {
    this.auth.loginWithRedirect();
  }
}
