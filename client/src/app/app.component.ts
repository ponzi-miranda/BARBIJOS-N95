import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  colorAuto = 'red';
  listEntregas = [ 'entrega1', 'entrega2']

  private calcularNumero() {

  }
}
