import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-listar-musicos',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './listar-musicos.component.html',
  styleUrl: './listar-musicos.component.css'
})
export class ListarMusicosComponent {

}
