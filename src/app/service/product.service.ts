import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProductService{


    constructor(private http:HttpClient){}

    persist(productObj:any){
        return this.http.post('http://localhost:8080/product',productObj);
    }

    retrieveAll(){
        return this.http.get<any>('http://localhost:8080/product');
    }

    retrieveById(id:any){
        return this.http.get<any>(`http://localhost:8080/product${id}`);
    }

    update(productObj:any){
        return this.http.put('http://localhost:8080/product',productObj);
    }

    deleteById(id:any){
        return this.http.delete(`http://localhost:8080/product${id}`);
    }
}