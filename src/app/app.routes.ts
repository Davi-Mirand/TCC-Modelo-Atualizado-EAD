import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ServicosComponent } from './componentes/servicos/servicos.component';
import { ContatoComponent } from './componentes/contato/contato.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'contato', component: ContatoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];
