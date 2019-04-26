import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShopService {

    productsUrl = "../assets/data/products.json";
    productCategoriesUrl = "../assets/data/product-categories.json";

    constructor(
        private http: HttpClient
    ) { }

    getProducts() {
        return this.http.get(this.productsUrl);
    }

    getProductCategories() {
        return this.http.get(this.productCategoriesUrl);
    }

}
