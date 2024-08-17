import { Component, Injectable, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-view-category',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule],
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

  selectedCategoryForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    createdAt: new FormControl(),
    modifiedAt: new FormControl()
  });

  onEditCategory(category:any){
    this.selectedCategoryForm.patchValue({
      id: category.id,
      name: category.name,
      description: category.description,
      createdAt: category.createdAt,
      modifiedAt: category.modifiedAt
    });
  }

  saveEditCategory(){
    this.service.update(this.selectedCategoryForm.value).subscribe(response => {
      this.ngOnInit();
    });
  }
}
