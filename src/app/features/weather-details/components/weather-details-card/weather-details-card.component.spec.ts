import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsCardComponent } from './weather-details-card.component';

describe('WeatherDetailsCardComponent', () => {
  let component: WeatherDetailsCardComponent;
  let fixture: ComponentFixture<WeatherDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
