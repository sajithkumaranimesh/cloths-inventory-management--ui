import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./common/menu/menu.component";
import { ManageSupplierComponent } from "./page/supplier/manage-supplier/manage-supplier.component";
import { ManageCategoryComponent } from "./page/category/manage-category/manage-category.component";
import { ManageProductComponent } from "./page/product/manage-product/manage-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, ManageSupplierComponent, ManageCategoryComponent, ManageProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pabaro-fashion-ui';
}
