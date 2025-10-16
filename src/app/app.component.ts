import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecarioComponent } from "./componentes/cabecario/cabecario.component";
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { PanelMenuModule } from 'primeng/panelmenu';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CabecarioComponent,
  MenubarModule,
ButtonModule,
DrawerModule,
PanelMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tcc-embalagens-atualizada';
}
