import { Component, Injectable, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { NgFor } from '@angular/common';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-view-category',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.css'
})
export class ViewCategoryComponent implements OnInit{

  public categoryList:any = [];

  constructor(private service:CategoryService){}

  ngOnInit(): void {
    this.service.retrieveAll().subscribe(response => {
      this.categoryList = response.data;
    });
  }



}
