import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private storageKey = 'pedidos'; 

  constructor() { }

  obtenerPedidos(): any[] {
    const pedidos = localStorage.getItem(this.storageKey);
    return pedidos ? JSON.parse(pedidos) : [];
  }

  agregarPedido(pedido: any): void {
    const pedidos = this.obtenerPedidos();
    pedidos.push(pedido);
    localStorage.setItem(this.storageKey, JSON.stringify(pedidos));
  }

  eliminarPedido(index: number): void {
    const pedidos = this.obtenerPedidos();
    pedidos.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(pedidos));
  }

  terminarPedido(index: number): void {
    const pedidos = this.obtenerPedidos();
    const pedido = pedidos[index];
    if (pedido) {
      pedido.terminado = true; 
      pedido.fechaTerminado = new Date().toISOString(); 
      localStorage.setItem(this.storageKey, JSON.stringify(pedidos));
    }
  }
}
