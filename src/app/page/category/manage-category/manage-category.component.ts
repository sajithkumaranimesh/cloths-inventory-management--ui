import { Component } from '@angular/core';
import { ViewCategoryComponent } from "../view-category/view-category.component";
import { AddCategoryComponent } from "../add-category/add-category.component";

@Component({
  selector: 'app-manage-category',
  standalone: true,
  imports: [ViewCategoryComponent, AddCategoryComponent],
  templateUrl: './manage-category.component.html',
  styleUrl: './manage-category.component.css'
})
export class ManageCategoryComponent {

}
