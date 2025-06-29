import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./Home/top-bar/top-bar.component";
import { MenuComponent } from "./Home/menu/menu.component";
import { HeroComponent } from "./Home/hero/hero.component";
import { CommonModule } from '@angular/common';
import { ServicosComponent } from "./Home/servicos/servicos.component";
import { NoticiasComponent } from "./Home/noticias/noticias.component";
import { CtaComponent } from "./Home/cta/cta.component";
import { ContactoComponent } from "./Home/contacto/contacto.component";
import { FooterComponent } from "./Home/footer/footer.component";


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
