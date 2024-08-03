import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutContainerComponent {
  auth = inject(AuthService);

  isAuthenticating$ = this.auth.isAuthenticated$;

  onLogout() {
    this.auth.logout({
      logoutParams: { returnTo: window.location.origin },
    });
  }
}
