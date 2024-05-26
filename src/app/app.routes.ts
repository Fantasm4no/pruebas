import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';


export const routes: Routes = [
    {path: 'register', title: 'Registro', component: RegisterComponent},
    {path: 'header', title: 'Encabezado', component: HeaderComponent},

];
