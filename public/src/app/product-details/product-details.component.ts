import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product = {}
  error = ''
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getOne(this.id)
  }

  getOne(id){
    console.log("We hit the function in components")
    this._route.paramMap.subscribe((params)=>{
      this.id = params.get('id')
      this._httpService.displayProduct(this.id)
      .subscribe((data)=>{
        console.log(data)
        this.product = data
      })
    })
  }

  delete(){
    if(this.product.quantity < 1){
      this._httpService.deleteProduct(this.id)
      .subscribe((data)=>{
        this._router.navigate(['/products'])
      })
    } else {
      this.error = "Quantity must be 0 to DELETE"
    }
  }
}
