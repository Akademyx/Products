webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var product_list_component_1 = __webpack_require__("./src/app/product-list/product-list.component.ts");
var product_edit_component_1 = __webpack_require__("./src/app/product-edit/product-edit.component.ts");
var product_new_component_1 = __webpack_require__("./src/app/product-new/product-new.component.ts");
var product_details_component_1 = __webpack_require__("./src/app/product-details/product-details.component.ts");
var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'products/new', component: product_new_component_1.ProductNewComponent },
    { path: 'products/:id', component: product_details_component_1.ProductDetailsComponent },
    { path: 'products/edit/:id', component: product_edit_component_1.ProductEditComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Commerce Manager</h1>\n<hr>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var product_list_component_1 = __webpack_require__("./src/app/product-list/product-list.component.ts");
var product_new_component_1 = __webpack_require__("./src/app/product-new/product-new.component.ts");
var product_edit_component_1 = __webpack_require__("./src/app/product-edit/product-edit.component.ts");
var product_details_component_1 = __webpack_require__("./src/app/product-details/product-details.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                product_new_component_1.ProductNewComponent,
                product_edit_component_1.ProductEditComponent,
                product_details_component_1.ProductDetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getList = function () {
        return this._http.get('/commerce');
    };
    HttpService.prototype.postProduct = function (obj) {
        var item = this._http.post('/commerce', obj);
        return item;
    };
    HttpService.prototype.displayProduct = function (id) {
        // console.log("We hit service ")
        return this._http.get('/commerce/' + id);
    };
    HttpService.prototype.updateProduct = function (obj) {
        return this._http.put('/commerce/' + obj.idNum, obj);
    };
    HttpService.prototype.deleteProduct = function (id) {
        return this._http.delete('/commerce/' + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>To delete a product, the Qty must be 0</p>\n\n<p *ngIf=\"error.length > 0\">{{error}}</p>\n\n<table>\n  <tr>\n    <td>Name:</td>\n    <td>{{product.name}}</td>\n  </tr>\n  <tr>\n    <td>Qty:</td>\n    <td>{{product.quantity}}</td>\n  </tr>\n  <tr>\n    <td>Price:</td>\n    <td>${{product.price}}</td>\n  </tr>\n</table>\n<button [routerLink]=\"['/products']\">Back</button>\n<button (click)=\"delete()\">Delete</button>\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.product = {};
        this.error = '';
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.getOne(this.id);
    };
    ProductDetailsComponent.prototype.getOne = function (id) {
        var _this = this;
        console.log("We hit the function in components");
        this._route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this._httpService.displayProduct(_this.id)
                .subscribe(function (data) {
                console.log(data);
                _this.product = data;
            });
        });
    };
    ProductDetailsComponent.prototype.delete = function () {
        var _this = this;
        if (this.product.quantity < 1) {
            this._httpService.deleteProduct(this.id)
                .subscribe(function (data) {
                _this._router.navigate(['/products']);
            });
        }
        else {
            this.error = "Quantity must be 0 to DELETE";
        }
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-details',
            template: __webpack_require__("./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__("./src/app/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router, router_1.ActivatedRoute])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;


/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Update Product</h1>\n<p *ngFor=\"let x of errors\">{{x}}</p>\n<form (submit)=\"editProduct()\">\n  <table>\n    <tr>\n      <td>Name:</td>\n      <td><input type=\"text\" [(ngModel)]=\"product.name\" name=\"name\"></td>\n    </tr>\n    <tr>\n      <td>Qty:</td>\n      <td><input type=\"number\" [(ngModel)]=\"product.quantity\" name=\"quantity\"></td>\n    </tr>\n    <tr>\n      <td>Price</td>\n      <td>$<input type=\"number\" [(ngModel)]=\"product.price\" name=\"price\"></td>\n    </tr>\n  </table>\n  <button>Update</button>\n</form>\n<button (click)=\"reset()\">Reset</button>"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.errors = [];
        this.product = {};
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    ProductEditComponent.prototype.getDetails = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this._httpService.displayProduct(_this.id)
                .subscribe(function (data) {
                _this.product = data;
            });
        });
    };
    ProductEditComponent.prototype.editProduct = function () {
        var _this = this;
        this._httpService.updateProduct(this.product)
            .subscribe(function (data) {
            if (data.errors) {
                for (var key in data.errors) {
                    _this.errors.push(data.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['/products']);
            }
        });
    };
    ProductEditComponent.prototype.reset = function () {
        this.getDetails();
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'app-product-edit',
            template: __webpack_require__("./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("./src/app/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router, router_1.ActivatedRoute])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;


/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product List</h1>\n<button [routerLink]=\"['/products/new']\">Add New Product</button>\n\n<table>\n  <thead>\n    <tr>\n      <th>Id</th>\n      <th>Name</th>\n      <th>Qty</th>\n      <th>Price</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let x of products\">\n      <td>{{x.idNum}}</td>\n      <td>{{x.name}}</td>\n      <td>{{x.quantity}}</td>\n      <td>${{x.price}}</td>\n      <td><button [routerLink]=\"['/products/edit/', x.idNum]\">Edit</button> <button [routerLink]=\"['/products/', x.idNum]\">Details</button></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ProductListComponent.prototype.getList = function () {
        var _this = this;
        this._httpService.getList()
            .subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "./src/app/product-new/product-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-new/product-new.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>New Product</h1>\n<p>Products must contain a Name</p>\n<p>Products must contain a Qty.</p>\n<p>Products must contain a Price.</p>\n<p *ngFor=\"let error of errors\">{{error}}</p>\n<form (submit)=\"addProduct()\" name=\"myForm\">\n    <table>\n    <tr>\n      <td><p>Name: </p></td>\n      <td><input type=\"text\" name=\"name\" [(ngModel)]=\"product.name\" ng-required></td>\n    </tr>\n    <tr>\n      <td><p>Quanitity: </p></td>\n      <td><input type=\"number\" name=\"quantity\" [(ngModel)]=\"product.quantity\" ng-required></td>\n    </tr>\n    <tr>\n      <td><p>Price: </p></td>\n      <td>$<input type=\"number\" name=\"price\" [(ngModel)]=\"product.price\" ng-required></td>\n    </tr>\n  </table>\n  <button ng-disabled=\"myForm.$invalid\">Create</button>\n</form>\n<button (click)=\"resetFields()\">Reset</button>"

/***/ }),

/***/ "./src/app/product-new/product-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductNewComponent = /** @class */ (function () {
    function ProductNewComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.idNum = 1;
        this.product = { idNum: this.idNum, name: '', quantity: 0, price: 0 };
        this.errors = [];
    }
    ProductNewComponent.prototype.ngOnInit = function () {
        this.resetFields();
    };
    ProductNewComponent.prototype.resetFields = function () {
        this.product = { idNum: this.idNum, name: '', quantity: 0, price: 0 };
    };
    ProductNewComponent.prototype.addProduct = function () {
        var _this = this;
        this._httpService.postProduct(this.product)
            .subscribe(function (data) {
            if (data.errors) {
                for (var key in data.errors) {
                    _this.errors.push(data.errors[key].message);
                }
            }
            else {
                _this.idNum++;
                // console.log("this is idNum", this.idNum)
                _this._router.navigate(['/products']);
            }
        });
    };
    ProductNewComponent = __decorate([
        core_1.Component({
            selector: 'app-product-new',
            template: __webpack_require__("./src/app/product-new/product-new.component.html"),
            styles: [__webpack_require__("./src/app/product-new/product-new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], ProductNewComponent);
    return ProductNewComponent;
}());
exports.ProductNewComponent = ProductNewComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map