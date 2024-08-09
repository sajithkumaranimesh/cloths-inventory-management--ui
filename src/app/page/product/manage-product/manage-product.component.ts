import { Component } from '@angular/core';
import { ViewProductComponent } from "../view-product/view-product.component";
import { AddProductComponent } from "../add-product/add-product.component";

@Component({
  selector: 'app-manage-product',
  standalone: true,
  imports: [ViewProductComponent, AddProductComponent],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css'
})
export class ManageProductComponent {

}
