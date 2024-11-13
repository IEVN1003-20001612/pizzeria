import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private orders: any[] = [];
  private ventas: any[] = [];  // Lista para almacenar las ventas
  private totalSales = 0;  // Total de ventas acumuladas

  addPizzaToOrder(pizza: any) {
    this.orders.push(pizza);
    this.totalSales += pizza.subtotal;
  }

  getOrders() {
    return this.orders;
  }

  removePizzaFromOrder(index: number) {
    const removedPizza = this.orders.splice(index, 1)[0];
    this.totalSales -= removedPizza.subtotal;
  }

  getTotalSales() {
    return this.totalSales;
  }

  finalizeOrder() {
    // Mueve las órdenes actuales a ventas
    this.ventas.push(...this.orders);
    localStorage.setItem('orders', JSON.stringify(this.orders));
    this.orders = [];
    this.totalSales = 0;
  }

  getVentas() {
    return this.ventas;  // Retorna las ventas
  }
}
