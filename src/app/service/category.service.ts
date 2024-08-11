import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CategoryService{

    constructor(private http:HttpClient){}

    persist(categoryObj:any){
        return this.http.post('http://localhost:8080/category',categoryObj);
    }

    retrieveAll(){
        return this.http.get<any>('http://localhost:8080/category');
    }

    retrieveById(id:any){
        return this.http.get<any>(`http://localhost:8080/category${id}`);
    }

    update(categoryObj:any){
        return this.http.put('http://localhost:8080/category',categoryObj);
    }

    deleteById(id:any){
        return this.http.delete(`http://localhost:8080/category${id}`);
    }
}