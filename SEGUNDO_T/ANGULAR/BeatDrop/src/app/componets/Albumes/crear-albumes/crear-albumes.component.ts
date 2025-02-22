import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AlbumesService } from '../../../services/albumes.service';
import { MusicosService } from '../../../services/musicos.service';
import { Musico } from '../../../models/musicos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-albumes',
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-albumes.component.html',
  styleUrl: './crear-albumes.component.css'
})
export class CrearAlbumesComponent {
  albumForm: FormGroup;
  musicos: Musico[] = [];

  constructor(private fb: FormBuilder, private albumService: AlbumesService, private musicoService: MusicosService) {
    this.albumForm = this.fb.group({
      musico_id: ['', Validators.required],
      titulo: ['', Validators.required],
      anio_lanzamiento: ['', [Validators.required, Validators.min(1900)]],
      canciones: ['', [Validators.required, Validators.min(1)]],
      genero: ['', Validators.required],
      imagen_url: [null], 
    });
  }

  ngOnInit(): void {
   this.musicoService.getAllMusicos().subscribe((musicos) => {
    this.musicos = musicos;
    });
  }

  onSubmit(): void {
    if (this.albumForm.valid) {
      console.log('Formulario enviado:', this.albumForm.value);
      this.albumService.addAlbum(this.albumForm.value).subscribe((res) => {});
    } else {
      console.log('Formulario no válido');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.albumForm.patchValue({
      imagen_url: file,
    });
  }
}
