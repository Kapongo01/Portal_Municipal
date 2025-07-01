import { Routes } from '@angular/router';
import { FormularioComponent } from './Pages/formulario/formulario.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path: "formulario",
        component: FormularioComponent
    }
];
