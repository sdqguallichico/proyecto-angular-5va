import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct, UpdateProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  readonly api_url:string = 'https://api.escuelajs.co/api/v1/products'
  constructor(private httpclient:HttpClient) { }

  getAll(){
    const url = `${this.api_url}`
    return this.httpclient.get(url);
  }

  getOne(id:number){
    const url = `${this.api_url}/${id}`;
    return this.httpclient.get(url);
  }

  create(product:CreateProduct){
   const data = {

      title:'ollitas',
      price:50,
      description:'ollitas de dama-nombre',
      images:[],
      categoryId:1,

    }
    const url = `${this.api_url}`
    return this.httpclient.post(url,data);


    //taller con put señalar el mnombre y revisas en la url
  }


  update(id:number,product:UpdateProduct){
    const data = {

       title:'neverita',
       price:3,
       description:'calzado de dama-nombre',



      }
      const url = "http://api.escuelajs.co/api/v1/products/5";


     return this.httpclient.put(url,data);


     //taller con put señalar el mnombre y revisas en la url
   }


   destroy(id:number){
    const url = `${this.api_url}/${id}`


    return this.httpclient.delete(url);
  }

}
