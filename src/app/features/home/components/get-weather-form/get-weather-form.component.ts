import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-weather-form',
  templateUrl: './get-weather-form.component.html',
  styleUrl: './get-weather-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetWeatherFormComponent {
  @Output() submit = new EventEmitter<string>();
  city: string = '';

  weatherForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.weatherForm = this.fb.group({
      city: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.weatherForm.get(fieldName);
    return field !== null && field.invalid && (field.dirty || field.touched);
  }

  onSubmit() {
    this.weatherForm.markAllAsTouched();
    if (this.weatherForm.valid) {
      this.submit.emit(this.weatherForm.value.city);
    }
  }
}
