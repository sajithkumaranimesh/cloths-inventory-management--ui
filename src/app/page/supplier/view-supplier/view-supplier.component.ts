import { Component, Injectable, OnInit } from '@angular/core';
import { SupplierService } from '../../../service/supplier.service';
import { NgFor } from '@angular/common';

@Injectable({providedIn:'root'})
@Component({
  selector: 'app-view-supplier',
  standalone: true,
  imports: [NgFor],
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



}
