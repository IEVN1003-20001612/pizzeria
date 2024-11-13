import { Component, OnInit } from '@angular/core';
import { OrdenService } from './orden.service';
import { PedidosComponent } from './pedidos/pedidos.component';
import { VentasComponent } from './ventas/ventas.component';
import { DetallePedidoComponent } from './detallepedido/detallepedido.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PedidosComponent, VentasComponent, DetallePedidoComponent],
  templateUrl: './app.component.html',
  styleUrls: [],
})

export class AppComponent implements OnInit {
  title = 'Pizzería';
  totalSales = 0;
  customerName: string = '';
  customerAddress: string = '';
  customerPhone: string = '';
  selectedSize: string = '';
  quantity: number = 1;
  ingredients: string[] = [];
  orders: any[] = [];

   constructor(private ordenService: OrdenService) {}

  ngOnInit() {
    this.totalSales = this.ordenService.getTotalSales();
  }

  getTotalSales() {
    this.totalSales = this.ordenService.getTotalSales();
  }

  addOrder() {
    const subtotal = this.calculateSubtotal();
    const pizzaOrder = {
      size: this.selectedSize,
      ingredients: this.ingredients,
      quantity: this.quantity,
      subtotal,
      customerName: this.customerName,  // Agregamos el nombre del cliente aquí
    };
    this.ordenService.addPizzaToOrder(pizzaOrder);  // Ahora pasamos solo un argumento
    this.resetOrderFields();
    this.getTotalSales();
  }

  calculateSubtotal(): number {
    return this.quantity * 100;
  }

  toggleIngredient(ingredient: string) {
    const index = this.ingredients.indexOf(ingredient);
    if (index === -1) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients.splice(index, 1);
    }
  }

  resetOrderFields() {
    this.customerName = '';
    this.customerAddress = '';
    this.customerPhone = '';
    this.selectedSize = '';
    this.quantity = 1;
    this.ingredients = [];
  }

  removePizza(index: number) {
    this.ordenService.removePizzaFromOrder(index);
    this.getTotalSales();
    this.orders = this.ordenService.getOrders();
  }
}
