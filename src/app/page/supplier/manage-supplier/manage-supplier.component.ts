import { Component } from '@angular/core';
import { ViewSupplierComponent } from "../view-supplier/view-supplier.component";
import { AddSupplierComponent } from "../add-supplier/add-supplier.component";

@Component({
  selector: 'app-manage-supplier',
  standalone: true,
  imports: [ViewSupplierComponent, AddSupplierComponent],
  templateUrl: './manage-supplier.component.html',
  styleUrl: './manage-supplier.component.css'
})
export class ManageSupplierComponent {

}
