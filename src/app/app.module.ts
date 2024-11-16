import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component'; 
import { DetallepedidoComponent } from './detallepedido/detallepedido.component'; 
import { VentasComponent } from './ventas/ventas.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent, 
    DetallepedidoComponent, 
    VentasComponent 
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
