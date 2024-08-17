import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SupplierService } from '../../../service/supplier.service';
import { CategoryService } from '../../../service/category.service';
import { NgFor } from '@angular/common';
import { ProductService } from '../../../service/product.service';
import { ViewCategoryComponent } from '../../category/view-category/view-category.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  constructor(
    private service: ProductService,
    private supplierService: SupplierService,
    private categoryService: CategoryService,
    private viewProduct: ViewCategoryComponent
  ) {}

  public supplierList: any = [];
  public categoryList: any = [];

  currentDate: string | undefined;
  currentTime: string | undefined;

  productForm = new FormGroup({
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

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
    this.currentTime = new Date().toLocaleTimeString();

    this.productForm.controls['createdAt'].setValue(
      this.currentDate + ' ' + this.currentTime
    );
    this.productForm.controls['modifiedAt'].setValue(
      this.currentDate + ' ' + this.currentTime
    );

    this.supplierService.retrieveAll().subscribe((responce) => {
      this.supplierList = responce.data;
    });

    this.categoryService.retrieveAll().subscribe((responce) => {
      this.categoryList = responce.data;
    });
  }

  @Output() productAdded = new EventEmitter<void>();

  addProduct() {
    this.service.persist(this.productForm.value).subscribe((response) => {
      this.productAdded.emit();

      const closeModalButton = document.querySelector(
        '.btn-close'
      ) as HTMLElement;
      closeModalButton.click();
    });
  }
}
