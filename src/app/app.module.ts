import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DetallePedidoComponent } from './detallepedido/detallepedido.component';
import { VentasComponent } from './ventas/ventas.component';
import { PedidosComponent } from './pedidos/pedidos.component';  // Si tienes este componente

@NgModule({
  declarations: [
    AppComponent,
    // Otros componentes aquí si no son standalone
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DetallePedidoComponent,
    VentasComponent,
    PedidosComponent  // Agregar los componentes aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
