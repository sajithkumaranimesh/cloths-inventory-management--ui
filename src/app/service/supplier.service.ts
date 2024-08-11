import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

 @Injectable({providedIn: 'root'})

 export class SupplierService{


    constructor(private http:HttpClient){}


    persist(supplierObj: any){
        return this.http.post('http://localhost:8080/supplier',supplierObj);
    }

    // retrieve(){
    //     return this.http
    // }
 }

