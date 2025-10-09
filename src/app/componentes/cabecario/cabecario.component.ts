import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cabecario',
  templateUrl: './cabecario.component.html',
  styleUrls: ['./cabecario.component.css']
})
export class CabecarioComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Início',
              icon: 'pi pi-home',
              routerLink: '/home'
          },
          {
              label: 'Sobre Nós',
              icon: 'pi pi-info',
              routerLink: '/sobre'
          },
          {
              label: 'Serviços',
              icon: 'pi pi-briefcase',
              routerLink: '/servicos'
          },
          {
              label: 'Contato',
              icon: 'pi pi-phone',
              routerLink: '/contato'
          }
      ];
  }

}
