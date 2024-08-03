import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  @Input() isAuthenticated = false;
  @Output() logoutClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onLogout() {
    this.logoutClicked.emit();
  }
}
