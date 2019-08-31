import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: object[] = [];
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  
  ngOnInit() {
    this.getList()
  }
  getList(){
    this._httpService.getList()
      .subscribe((data:any)=>{
        this.products =data;
      })
  }
}
