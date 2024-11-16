import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/orden.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detallepedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detallepedido.component.html',
  styleUrls: [] 
})
export class DetallepedidoComponent implements OnInit {
  pedidos: any[] = [];
  pedidoEnEdicion: number | null = null;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.cargarPedidos();
  }

  editarPedido(index: number) {
    this.pedidoEnEdicion = index;  
  }

  cargarPedidos() {
    this.pedidos = this.pedidoService.obtenerPedidos();
  }
  
  quitarPedido(index: number) {
    this.pedidoService.eliminarPedido(index);
    this.cargarPedidos();
  }

  terminarPedido(index: number) {
    const pedido = this.pedidos[index];
    const costoTotal = pedido.subtotal;
    const confirmacion = confirm(`El costo total de su pedido es ${costoTotal}. ¿Está de acuerdo con el total?`);

    if (confirmacion) {
      this.pedidoService.terminarPedido(index);
      this.pedidos[index].terminado = true;
      this.pedidos[index].fechaTerminado = new Date().toISOString();
    } else {
      this.pedidoEnEdicion = index;
    }
  }

  guardarEdicion(index: number) {
    this.pedidoEnEdicion = null;
    alert('Pedido editado con éxito.');
  }

  cancelarEdicion() {
    this.pedidoEnEdicion = null;
  }
}
