import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../orden.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  totalSales = 0;

  constructor(private ordenService: OrdenService) {}

  ngOnInit() {
    this.totalSales = this.ordenService.getTotalSales();
  }
}
