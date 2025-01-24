import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Fixed typo
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: Housinglocation[] = [];

  // Injecting HousingService
  private housingService: HousingService = inject(HousingService);

  constructor() {
    // Fetching housing locations from the service
    this.housingService.getAllHousingLocations().subscribe((locations) => {
      this.housingLocationList = locations;
    });
  }
}
