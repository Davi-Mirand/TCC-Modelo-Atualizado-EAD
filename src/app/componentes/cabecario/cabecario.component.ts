import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-cabecario',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule, DrawerModule],
  templateUrl: './cabecario.component.html',
  styleUrls: ['./cabecario.component.css']
})
export class CabecarioComponent {
  drawerVisivel = false;

  items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'Cursos', icon: 'pi pi-book', routerLink: '/cursos' },
    { label: 'Professores', icon: 'pi pi-users', routerLink: '/professores' },
    { label: 'Contato', icon: 'pi pi-envelope', routerLink: '/contato' }
  ];
}
