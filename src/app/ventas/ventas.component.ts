import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/orden.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventas.component.html', 
  styleUrls: []
})
export class VentasComponent implements OnInit {
  ventas: Pedido[] = [];
  ventasTotales: number = 0;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas() {
    const pedidos = this.pedidoService.obtenerPedidos();
    
    // Filtrar pedidos terminados
    this.ventas = pedidos.filter((pedido: Pedido) => pedido.terminado); 

    // Calcular el total de ventas
    this.calcularVentasTotales();
  }

  filtrarVentasPorFecha(periodo: string) {
    const pedidos = this.pedidoService.obtenerPedidos();
    let fechaFiltro = new Date();

    if (periodo === 'día') {
      fechaFiltro.setHours(0, 0, 0, 0); 
      this.ventas = pedidos.filter(pedido => 
        new Date(pedido.fechaTerminado).setHours(0, 0, 0, 0) === fechaFiltro.getTime() && pedido.terminado);
    } else if (periodo === 'mes') {
      const mes = fechaFiltro.getMonth();
      const anio = fechaFiltro.getFullYear();
      this.ventas = pedidos.filter(pedido => {
        const fecha = new Date(pedido.fechaTerminado);
        return fecha.getMonth() === mes && fecha.getFullYear() === anio && pedido.terminado;
      });
    }

    // Calcular el total de ventas después de aplicar el filtro
    this.calcularVentasTotales();
  }

  calcularVentasTotales() {
    this.ventasTotales = this.ventas.reduce((total, pedido) => total + pedido.subtotal, 0);
  }
}

interface Pedido {
  nombre: string; 
  terminado: boolean;
  subtotal: number;
  fechaTerminado?: string;
}
