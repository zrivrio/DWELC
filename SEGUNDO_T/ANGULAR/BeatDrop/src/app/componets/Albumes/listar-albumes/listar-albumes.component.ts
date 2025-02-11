import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';


@Component({
  selector: 'app-listar-albumes',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './listar-albumes.component.html',
  styleUrl: './listar-albumes.component.css'
})
export class ListarAlbumesComponent {

}
