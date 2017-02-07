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
var http_service_1 = require('./_service/http.service');
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.postDataLogin = { success: false, token: null };
    }
    AppComponent.prototype.ngOnInit = function () { this.getProducts(); this.check(); };
    AppComponent.prototype.ngOnChanges = function (check_token) {
        console.log('something change');
    };
    AppComponent.prototype.getProducts = function () {
        var _this = this;
        this._httpService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AppComponent.prototype.registration = function (username, password) {
        var _this = this;
        this.username = '';
        this.password = '';
        this._httpService.postRegistration(username, password)
            .subscribe(function (data) { return _this.postDataRegistration = JSON.stringify(data); }, function (error) { return alert(error); }, function () {
            alert('Registration complete, please log In');
            _this.closeModalRegister();
        });
    };
    AppComponent.prototype.login = function (username, password) {
        var _this = this;
        this.username = '';
        this.password = '';
        this._httpService.postLogin(username, password)
            .subscribe(function (data) { return _this.postDataLogin = data; }, function (error) { return alert('Some mistake, please try again'); }, function () {
            if (_this.postDataLogin['token'] === undefined) {
                alert('User isn\'t registered, try again');
            }
            else {
                localStorage.setItem('token', _this.postDataLogin['token']);
                _this.check_token = true;
                _this.closeModalLogin();
            }
        });
    };
    AppComponent.prototype.check = function () {
        if (null !== localStorage.getItem('token')) {
            this.check_token = true;
            console.log(true);
        }
        else {
            this.check_token = false;
            console.log(false);
        }
    };
    AppComponent.prototype.logout = function () {
        this.check_token = false;
        localStorage.removeItem('token');
    };
    AppComponent.prototype.closeModalLogin = function () {
        var window = document.getElementById('login');
        var html = document.getElementById('html');
        if (window.classList.contains("uk-open")) {
            window.classList.remove('uk-open');
            window.classList.add('uk-close');
            window.classList.remove('uk-close');
            html.classList.remove('uk-modal-page');
            window.style.display = "none";
        }
        else if (window.classList.contains("uk-close")) {
            window.classList.remove('uk-close');
        }
    };
    AppComponent.prototype.closeModalRegister = function () {
        var window = document.getElementById('registration');
        var html = document.getElementById('html');
        if (window.classList.contains("uk-open")) {
            window.classList.remove('uk-open');
            window.classList.add('uk-close');
            window.classList.remove('uk-close');
            html.classList.remove('uk-modal-page');
            window.style.display = "none";
        }
        else if (window.classList.contains("uk-close")) {
            window.classList.remove('uk-close');
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map