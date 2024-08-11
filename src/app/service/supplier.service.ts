import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

 @Injectable({providedIn: 'root'})

 export class SupplierService{


    constructor(private http:HttpClient){}


    persist(supplierObj: any){
        return this.http.post('http://localhost:8080/supplier',supplierObj);
    }

    retrieve(){
        return this.http.get<any>('http://localhost:8080/supplier');
    }

    retireveById(id:any){
        return this.http.get<any>(`http://localhost:8080/supplier${id}`);
    }

    update(supplierObj:any){
        return this.http.put('http://localhost:8080/supplier',supplierObj);
    }

    delete(id:any){
        return this.http.delete(`http://localhost:8080/supplie${id}r`);
    }
 }

