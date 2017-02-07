import {Component, OnInit} from '@angular/core';
import {HttpService} from '../_service/http.service';
import {Product} from "../_objects/product";

@Component({
    moduleId: module.id,
    templateUrl: './product.component.html',
    styleUrls: ['product.component.css'],
    providers: [HttpService]
})

export  class ProductComponent implements OnInit {
    products:Product[];

    constructor(private _httpService: HttpService){}

    ngOnInit() {this.getProducts();}


    getProducts(){
        this._httpService.getProducts()
            .subscribe(
                products => this.products = products,
                error => alert(error),
                () => console.log('Finished')
            )
    }
}