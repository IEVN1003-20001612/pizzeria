import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallepedidoComponent } from './detallepedido/detallepedido.component';
import { VentasComponent } from './ventas/ventas.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PedidosComponent, DetallepedidoComponent, VentasComponent], 
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Pizzeria';
}
