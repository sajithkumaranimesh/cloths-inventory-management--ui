import { Component, Injectable, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SupplierService } from '../../../service/supplier.service';
import { CategoryService } from '../../../service/category.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css',
})
export class ViewProductComponent implements OnInit {
  public productList: any = [];

  public supplierList: any = [];
  public categoryList: any = [];

  constructor(
    private service: ProductService,
    private supplierService: SupplierService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.service.retrieveAll().subscribe((response) => {
      this.productList = response.data;
    });

    this.supplierService.retrieveAll().subscribe((responce) => {
      this.supplierList = responce.data;
    });

    this.categoryService.retrieveAll().subscribe((responce) => {
      this.categoryList = responce.data;
    });
  }

  selectedProductForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    size: new FormControl(),
    price: new FormControl(),
    stockQuantity: new FormControl(),
    description: new FormControl(),
    isAvailable: new FormControl(),
    createdAt: new FormControl(),
    modifiedAt: new FormControl(),
    category_id: new FormControl(),
    supplier_id: new FormControl(),
  });

  onEditProduct(product: any) {
    this.selectedProductForm.patchValue({
      id: product.id,
      name: product.name,
      size: product.size,
      price: product.price,
      stockQuantity: product.stockQuantity,
      description: product.description,
      isAvailable: product.isAvailable,
      createdAt: product.createdAt,
      modifiedAt: product.modifiedAt,
      category_id: product.category_id,
      supplier_id: product.supplier_id,
    });
  }

  saveEditProduct() {
    this.service
      .update(this.selectedProductForm.value)
      .subscribe((response) => {
        this.ngOnInit();
      });
  }
}
