import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecarioComponent } from "./componentes/cabecario/cabecario.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tcc-embalagens-atualizada';
}
