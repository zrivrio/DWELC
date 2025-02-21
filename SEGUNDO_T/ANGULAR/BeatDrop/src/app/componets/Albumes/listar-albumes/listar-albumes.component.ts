import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { AlbumesService } from '../../../services/albumes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Musico } from '../../../models/musicos';
import { MusicosService } from '../../../services/musicos.service';
import { Album } from '../../../models/albumes';



@Component({
  selector: 'app-listar-albumes',
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './listar-albumes.component.html',
  styleUrl: './listar-albumes.component.css'
})
export class ListarAlbumesComponent implements OnInit {
  musicos: Musico[] = [];

  private albumesService: AlbumesService = inject(AlbumesService);

  constructor() {}

  ngOnInit(): void {
    this.albumesService.getAllAlbumes().subscribe(data => {
      this.musicos = data;
    });
  }


}
