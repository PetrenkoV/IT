import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Product }        from '../_objects/product';
import { Comment }        from '../_objects/comment';
import { HttpService } from '../_service/http.service';

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit{
    product: Product;
    comments: Comment[];
    postComment: string;

    constructor(
    private _httpService: HttpService,
    private route : ActivatedRoute,
    private location: Location
    ){}

    ngOnInit() { this.getProductOne(); this.getCommentOne(); }

    getProductOne():void{
            this.route.params
                .switchMap((params: Params) => this._httpService.getProductsOne(+params['id']))
                .subscribe(product => this.product = product);

    }
    getCommentOne(){
        this.route.params
            .switchMap((params: Params) => this._httpService.getComments(+params['id']))
            .subscribe(comments => this.comments = comments);

    }
    goBack(): void {
        this.location.back();
    }
    sendComment(rate:number, text:string, id:number){
        this._httpService.postComment(rate, text, id)
            .subscribe(
                data => this.postComment = JSON.stringify(data),
                error => this.error(),
                () => this.getCommentOne()
            )
    }
    error(){
        let error = document.getElementById('error');
        error.style.display='block';
    }


}
