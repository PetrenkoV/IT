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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('../rxjs-operators');
var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.productsUrl = 'http://smktesting.herokuapp.com/api/products/';
        this.postUrl = 'http://smktesting.herokuapp.com/api/reviews/';
        this.registerUrl = 'http://smktesting.herokuapp.com/api/register/?format=json';
        this.loginUrl = 'http://smktesting.herokuapp.com/api/login/';
        this.reviewsUrl = 'http://smktesting.herokuapp.com/api/reviews/';
    }
    HttpService.prototype.getProducts = function () {
        return this._http.get(this.productsUrl)
            .map(this.extractData);
    };
    HttpService.prototype.getProductsMany = function () {
        return this._http.get(this.productsUrl).toPromise().then(this.extractData);
    };
    HttpService.prototype.getProductsOne = function (id) {
        return this.getProductsMany().then(function (products) { return products.find(function (product) { return product.id === id; }); });
    };
    HttpService.prototype.getComments = function (id) {
        return this._http.get(this.reviewsUrl + id).toPromise().then(this.extractData);
    };
    HttpService.prototype.postRegistration = function (username, password) {
        var json = JSON.stringify({ username: username, password: password });
        var params = json;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.registerUrl, params, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.postLogin = function (username, password) {
        var json = JSON.stringify({ username: username, password: password });
        var params = json;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.loginUrl, params, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.postComment = function (rate, text, id) {
        var tokens = localStorage.getItem('token');
        var json = JSON.stringify({ rate: +rate, text: text });
        var params = json;
        var headers = new http_2.Headers();
        headers.append('Authorization', 'Token ' + tokens);
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.postUrl + id, params, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map