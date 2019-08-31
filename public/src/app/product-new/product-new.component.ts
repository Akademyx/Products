import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }

  idNum = 1
  product = {idNum:this.idNum, name: '', quantity: 0, price: 0}
  errors: string[] = [];

  ngOnInit() {
    this.resetFields()
  }

  resetFields(){
    this.product = {idNum: this.idNum, name: '', quantity: 0, price: 0}
  }
  addProduct(){
    this._httpService.postProduct(this.product)
    .subscribe((data:any)=>{
      if(data.errors){
        for(var key in data.errors){
          this.errors.push(data.errors[key].message)
        }
      } else {
        this.idNum++
        // console.log("this is idNum", this.idNum)
        this._router.navigate(['/products'])
      }
    })
  }
}
