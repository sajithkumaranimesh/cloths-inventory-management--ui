import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit{

  currentDate: string | undefined;
  currentTime: string | undefined;

  categoryForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    createdAt: new FormControl('',Validators.required),
    modifiedAt: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
    this.currentTime = new Date().toLocaleTimeString();

    this.categoryForm.controls['createdAt'].setValue(this.currentDate + ' ' +this.currentTime);
    this.categoryForm.controls['modifiedAt'].setValue(this.currentDate + ' ' +this.currentTime);
  }

  addCategory(){
    console.log(this.categoryForm);
  }

}
