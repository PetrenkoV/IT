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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_service_1 = require('../_service/http.service');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_httpService, route, location) {
        this._httpService = _httpService;
        this.route = route;
        this.location = location;
    }
    ProductDetailComponent.prototype.ngOnInit = function () { this.getProductOne(); this.getCommentOne(); };
    ProductDetailComponent.prototype.getProductOne = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this._httpService.getProductsOne(+params['id']); })
            .subscribe(function (product) { return _this.product = product; });
    };
    ProductDetailComponent.prototype.getCommentOne = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this._httpService.getComments(+params['id']); })
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailComponent.prototype.sendComment = function (rate, text, id) {
        var _this = this;
        this._httpService.postComment(rate, text, id)
            .subscribe(function (data) { return _this.postComment = JSON.stringify(data); }, function (error) { return _this.error(); }, function () { return _this.getCommentOne(); });
    };
    ProductDetailComponent.prototype.error = function () {
        var error = document.getElementById('error');
        error.style.display = 'block';
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.css']
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.ActivatedRoute, common_1.Location])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map