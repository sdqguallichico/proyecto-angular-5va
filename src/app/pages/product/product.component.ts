import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    this.updateProduct();

  }

  getProducts(){
    this.httpclient.get("https://api.escuelajs.co/api/v1/products").subscribe (
      response => {
        console.log(response);
      }
    ) ;
  }

  getProduct(){
    this.httpclient.get("https://api.escuelajs.co/api/v1/products/8").subscribe (
      response => {
        console.log(response);
      }
    );
  }

  createProduct(){
   const data = {

      title:'zapatos',
      price:50,
      description:'calzado de dama-nombre',
      images:[],
      categoryId:1,

    }
    const url="https://api.escuelajs.co/api/v1/products"
    this.httpclient.post(url,data).subscribe (
      response => {
        console.log(response);
      }
    );


    //taller con put señalar el mnombre y revisas en la url
  }


  updateProduct(){
    const data = {

       title:'nevera',
       price:3,
       description:'calzado de dama-nombre',


     }
     const url="https://api.escuelajs.co/api/v1/products"
     this.httpclient.put(url,data).subscribe (
       response => {
         console.log(response);
       }
     );


     //taller con put señalar el mnombre y revisas en la url
   }

}
