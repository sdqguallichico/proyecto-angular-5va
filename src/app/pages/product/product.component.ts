import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private ProductHttpService: ProductHttpService) { }

  ngOnInit(): void {
     this.getProducts();
    //this.getProduct();
    //this.createProduct();
    // this.updateProduct();
    //this.deleteProduct();

  }

  getProducts(){
    this.ProductHttpService.getAll().subscribe (
      response => {
        console.log(response);
      }
    ) ;
  }

  getOne(){
    this.ProductHttpService.getOne(1).subscribe (
      response => {
        console.log(response);
      }
    );
  }

  create(){
   const data = {

      title:'ollitas',
      price:50,
      description:'ollitas de dama-nombre',
      images:[],
      categoryId:1,

    }

    this.ProductHttpService.create(1).subscribe (
      response => {
        console.log(response);
      }
    );


    //taller con put señalar el mnombre y revisas en la url
  }


  update(){
    const data = {

       title:'neverita',
       price:3,
       description:'calzado de dama-nombre',


     }

     this.ProductHttpService.update().subscribe (
       response => {
         console.log(response);
       }
     );


     //taller con put señalar el mnombre y revisas en la url
   }


   destroy(){

    this.ProductHttpService.destroy(2).subscribe (
      response => {
        console.log(response);
      }
    );
  }

}
