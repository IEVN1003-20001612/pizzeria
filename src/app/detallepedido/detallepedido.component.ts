import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../orden.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detallepedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detallepedido.component.html',
  styleUrls: ['./detallepedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  pizzas: any[] = [];  

  constructor(private ordenService: OrdenService) {}

  ngOnInit() {
    this.pizzas = this.ordenService.getOrders();  
  }

  removePizza(index: number) {
    this.ordenService.removePizzaFromOrder(index);
  }
}
