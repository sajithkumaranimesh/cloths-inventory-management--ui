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

  supplierForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    company: new FormControl('',[Validators.required]),
    createdAt: new FormControl(''),
    modifiedAt: new FormControl('')
  });

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();

    this.currentTime = new Date().toLocaleTimeString();

    this.supplierForm.controls['createdAt'].setValue(this.currentDate + ' ' + this.currentTime);
    this.supplierForm.controls['modifiedAt'].setValue(this.currentDate + ' ' + this.currentTime);
  }


  addSupplier(){
    console.log(this.supplierForm);
  }
}
