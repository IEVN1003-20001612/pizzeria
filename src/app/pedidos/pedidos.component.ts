import { Component } from '@angular/core';
import { OrdenService } from '../orden.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  customerName: string = '';
  customerAddress: string = '';
  customerPhone: string = '';
  selectedSize: string = '';
  quantity: number = 1;
  ingredients: string[] = [];

  constructor(private ordenService: OrdenService) {}

  addOrder() {
    const subtotal = this.calculateSubtotal();
    const pizzaOrder = {
      size: this.selectedSize,
      ingredients: this.ingredients,
      quantity: this.quantity,
      subtotal
    };

    this.ordenService.addPizzaToOrder(pizzaOrder);

    
    this.customerName = '';
    this.customerAddress = '';
    this.customerPhone = '';
    this.selectedSize = '';
    this.quantity = 1;
    this.ingredients = [];
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
}
