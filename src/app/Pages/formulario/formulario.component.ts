import { Component } from '@angular/core';
import { MenuComponent } from "../../Component/menu/menu.component";
import { CtaComponent } from "../../Component/cta/cta.component";
import { Formulario1Component } from "../../Component/formulario1/formulario1.component";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MenuComponent, CtaComponent, Formulario1Component],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
