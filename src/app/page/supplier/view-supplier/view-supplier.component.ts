import { Component, Injectable, OnInit } from '@angular/core';
import { SupplierService } from '../../../service/supplier.service';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Injectable({providedIn:'root'})
@Component({
  selector: 'app-view-supplier',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './view-supplier.component.html',
  styleUrl: './view-supplier.component.css'
})
export class ViewSupplierComponent implements OnInit{

  public supplierList:any = [];

  constructor(private service:SupplierService){}

  ngOnInit(): void {
    this.service.retrieveAll().subscribe(response =>{
      this.supplierList = response.data;
    })
  }

  selectedSupplierForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    company: new FormControl(),
    createdAt: new FormControl(),
    modifiedAt: new FormControl()
  });


  onEditSupplier(supplier: any) {
    this.selectedSupplierForm.patchValue({
      id: supplier.id,
      name: supplier.name,
      email: supplier.email,
      company: supplier.company,
      createdAt: supplier.createdAt,
      modifiedAt: supplier.modifiedAt
    });
  }

  saveEditSupplier(){
    this.service.update(this.selectedSupplierForm.value).subscribe(response =>{
      this.ngOnInit();
    })
  }

  onDeleteSupplier(id:any){
    this.service.deleteById(id).subscribe(response => {
      this.ngOnInit();
    })
  }

}
