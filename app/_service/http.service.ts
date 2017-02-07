import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import '../rxjs-operators';
import{ Observable } from 'rxjs/observable';
import {Product} from '../_objects/product';
import {Comment} from '../_objects/comment';
import {User} from '../_objects/user';

@Injectable()

export class HttpService {

    private productsUrl = 'http://smktesting.herokuapp.com/api/products/';
    private postUrl = 'http://smktesting.herokuapp.com/api/reviews/';
    private registerUrl = 'http://smktesting.herokuapp.com/api/register/?format=json';
    private loginUrl = 'http://smktesting.herokuapp.com/api/login/';

    private reviewsUrl = 'http://smktesting.herokuapp.com/api/reviews/';
    user: User[];

    constructor(private _http: Http) {
    }

    getProducts(): Observable<Product[]> {
        return this._http.get(this.productsUrl)
            .map(this.extractData);
    }
    getProductsMany(): Promise<Product[]> {
        return this._http.get(this.productsUrl).toPromise().then(this.extractData);
    }
    getProductsOne(id: number): Promise<Product> {
        return this.getProductsMany().then(products => products.find(product => product.id === id))
    }
    getComments(id: number): Promise<Comment[]> {
        return this._http.get(this.reviewsUrl+id).toPromise().then(this.extractData);
    }

    postRegistration(username: string, password: string) {
        var json = JSON.stringify({username: username, password: password});
        var params = json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.registerUrl, params, {
            headers: headers
        })
            .map(res => res.json())
    }

    postLogin(username: string, password: string) {
        var json = JSON.stringify({username: username, password: password});
        var params = json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.loginUrl, params, {
            headers: headers
        })
            .map(res => res.json())
    }

    postComment(rate: number, text: string, id: number) {

        var tokens=localStorage.getItem('token');
        var json = JSON.stringify({ rate: +rate, text: text });
        var params = json;
        var headers = new Headers();
        headers.append('Authorization', 'Token '+tokens);
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.postUrl+id, params, {
            headers: headers
        })
            .map(res => res.json())
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


}

