import { Component } from '@angular/core';
import { FormularioComponent } from "../../Pages/formulario/formulario.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  isMenuOpen = false;


}
