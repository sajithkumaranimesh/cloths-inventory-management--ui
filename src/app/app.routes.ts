import { Routes } from '@angular/router';
import { ManageSupplierComponent } from './page/supplier/manage-supplier/manage-supplier.component';
import { ManageCategoryComponent } from './page/category/manage-category/manage-category.component';
import { ManageProductComponent } from './page/product/manage-product/manage-product.component';

export const routes: Routes = [
    {
        path: 'manage-supplier',
        component:ManageSupplierComponent
    },
    {
        path: 'manage-category',
        component:ManageCategoryComponent
    },
    {
        path: 'manage-product',
        component:ManageProductComponent
    }
];
