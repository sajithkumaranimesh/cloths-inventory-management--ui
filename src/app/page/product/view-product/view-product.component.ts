import { Component, Injectable, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { NgFor } from '@angular/common';

@Injectable({providedIn:'root'})
@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit{

  public productList:any = [];

  constructor(private service:ProductService){}

  ngOnInit(): void {
    this.service.retrieveAll().subscribe(response => {
      this.productList = response.data;
    });
  }

}
