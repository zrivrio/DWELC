import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/real-estate.mode';
import { RealEstateService } from '../../services/real-estate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-real-estate',
  imports: [CommonModule],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.css'
})
export class RealEstateComponent implements OnInit {
  properties: Property[] = [];

  constructor(private realEstateService : RealEstateService){}

  ngOnInit(): void {
      
  }

  getProperties(): void{
    this.realEstateService.getProperties().subscribe(p => this.properties = p);
  }

  viewDetails(property : Property) : void{
    alert(`Detalles de ${property.name}: 
      Localizacion: ${property.location}`)
  }

}
