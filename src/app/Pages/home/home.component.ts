import { Component } from '@angular/core';
import { MenuComponent } from "../../Component/menu/menu.component";
import { HeroComponent } from "../../Component/hero/hero.component";
import { ServicosComponent } from "../../Component/servicos/servicos.component";
import { NoticiasComponent } from "../../Component/noticias/noticias.component";
import { ContactoComponent } from "../../Component/contacto/contacto.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, HeroComponent, ServicosComponent, NoticiasComponent, ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
