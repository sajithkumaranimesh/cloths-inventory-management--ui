import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SupplierService } from '../../../service/supplier.service';
import { ViewSupplierComponent } from '../view-supplier/view-supplier.component';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css',
})
export class AddSupplierComponent implements OnInit {

  currentDate: string | undefined;
  currentTime: string | undefined;

  supplierForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    createdAt: new FormControl(''),
    modifiedAt: new FormControl(''),
  });

  constructor(
    private service: SupplierService,
    private viewSupplier:ViewSupplierComponent
  ) {}

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();

    this.currentTime = new Date().toLocaleTimeString();

    this.supplierForm.controls['createdAt'].setValue(
      this.currentDate + ' ' + this.currentTime
    );
    this.supplierForm.controls['modifiedAt'].setValue(
      this.currentDate + ' ' + this.currentTime
    );
  }

  @Output() supplierAdded = new EventEmitter<void>();

  addSupplier() {
    this.service.persist(this.supplierForm.value).subscribe((response) => {
      console.log(response);
      if (response == null) {
        // Emit the event
        this.supplierAdded.emit();

        // Optionally, close the modal
        const closeModalButton = document.querySelector('.btn-close') as HTMLElement;
        closeModalButton.click();
      }
    });
  }
}
