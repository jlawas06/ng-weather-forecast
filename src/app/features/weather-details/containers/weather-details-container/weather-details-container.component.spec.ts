import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsContainerComponent } from './weather-details-container.component';

describe('WeatherDetailsContainerComponent', () => {
  let component: WeatherDetailsContainerComponent;
  let fixture: ComponentFixture<WeatherDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDetailsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
