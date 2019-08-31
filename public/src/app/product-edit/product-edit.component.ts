import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: string;
  errors: string[] = [];
  product: object = {}
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getDetails()
  }

  getDetails(){
    this._route.paramMap.subscribe((params) => {
      this.id = params.get('id')
      this._httpService.displayProduct(this.id)
        .subscribe((data) => {
          this.product = data
        })
    })
  }
  editProduct(){
    this._httpService.updateProduct(this.product)
    .subscribe((data:any)=> {
      if(data.errors){
        for(var key in data.errors){
          this.errors.push(data.errors[key].message)
        }
      }else{
        this._router.navigate(['/products'])
      }
    })
  }

  reset(){
    this.getDetails()
  }
}
