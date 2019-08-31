import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }

  getList(){
    return this._http.get('/commerce')
  }

  postProduct(obj){
    var item = this._http.post('/commerce', obj)
    return item
  }
  displayProduct(id){
    // console.log("We hit service ")
    return this._http.get('/commerce/'+id)
  }
  updateProduct(obj){
    return this._http.put('/commerce/'+obj.idNum, obj)
  }
  deleteProduct(id){
    return this._http.delete('/commerce/'+id)
  }
}
