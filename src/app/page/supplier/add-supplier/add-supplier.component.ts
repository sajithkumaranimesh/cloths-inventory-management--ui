import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent implements OnInit{

  currentDate: string | undefined;
  currentTime: string | undefined;


  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
    console.log(this.currentDate);

    this.currentTime = new Date().toLocaleTimeString();
    console.log(this.currentTime);
  }

  supplierForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    company: new FormControl('',[Validators.required]),
    createdAt: new FormControl('',[Validators.required]),
    modifiedAt: new FormControl('',[Validators.required])
  });

  addSupplier(){
    console.log(this.supplierForm);
  }
}
