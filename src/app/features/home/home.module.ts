import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GithubProfileUrlPipe } from '../../shared/pipes';
import { GetWeatherFormComponent } from './components/get-weather-form/get-weather-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
];

@NgModule({
  declarations: [
    HomeContainerComponent,
    UserDetailsComponent,
    GetWeatherFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    GithubProfileUrlPipe,
  ],
})
export class HomeModule {}
