import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./Component/top-bar/top-bar.component";
import { MenuComponent } from "./Component/menu/menu.component";
import { HeroComponent } from "./Component/hero/hero.component";
import { CommonModule } from '@angular/common';
import { ServicosComponent } from "./Component/servicos/servicos.component";
import { NoticiasComponent } from "./Component/noticias/noticias.component";
import { CtaComponent } from "./Component/cta/cta.component";
import { ContactoComponent } from "./Component/contacto/contacto.component";
import { FooterComponent } from "./Component/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopBarComponent, MenuComponent, HeroComponent, ServicosComponent, NoticiasComponent, CtaComponent, ContactoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portal-Municipe';
}
