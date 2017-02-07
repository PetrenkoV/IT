import { Component, OnInit, OnChanges } from '@angular/core';
import {HttpService} from './_service/http.service';
import {Product} from './_objects/product';
import {Comment} from './_objects/comment';
import './rxjs-operators';




@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css'],
    providers: [HttpService]

})
export class AppComponent implements OnInit, OnChanges {
    postDataRegistration: string;
    postDataLogin : {}= {success : false , token : null};
    products: Product[];
    comment: Comment[];
    username: string;
    password: string;
    check_token:boolean;



    constructor(private _httpService: HttpService){}

    ngOnInit() {this.getProducts(); this.check();}

    ngOnChanges(check_token: any){
        console.log('something change')
    }
    getProducts(){
        this._httpService.getProducts()
            .subscribe(
                products => this.products = products,
                error => alert(error),
                () => console.log('Finished')
            )
    }

    registration(username: string, password: string){
        this.username = '';
        this.password = '';
        this._httpService.postRegistration(username, password)
            .subscribe(
                data => this.postDataRegistration = JSON.stringify(data),
                error => alert(error),
                () => {
                    alert('Registration complete, please log In');
                    this.closeModalRegister();
                }
            )
    }

    login(username: string, password: string){
        this.username = '';
        this.password = '';
        this._httpService.postLogin(username, password)
            .subscribe(
                data => this.postDataLogin = data,
                error => alert('Some mistake, please try again'),
                () => {
                    if(this.postDataLogin['token'] === undefined){
                        alert('User isn\'t registered, try again');
                    }
                    else{
                        localStorage.setItem('token', this.postDataLogin['token']);
                        this.check_token = true;
                        this.closeModalLogin();
                    }
                }
            )
    }

    check(){
        if(null!==localStorage.getItem('token'))
        {
            this.check_token = true;
            console.log(true)
        }else{
            this.check_token = false;
            console.log(false)
        }
    }
    logout(){
        this.check_token = false;
        localStorage.removeItem('token');
     }
        closeModalLogin(){
        let window = document.getElementById('login');
        let html = document.getElementById('html');
            if(window.classList.contains("uk-open")){
                window.classList.remove('uk-open');
                window.classList.add('uk-close');
                window.classList.remove('uk-close');
                html.classList.remove('uk-modal-page');
                window.style.display="none";
            }else if(window.classList.contains("uk-close")){
                window.classList.remove('uk-close');


       }}
        closeModalRegister(){
        let window = document.getElementById('registration');
        let html = document.getElementById('html');
            if(window.classList.contains("uk-open")){
                window.classList.remove('uk-open');
                window.classList.add('uk-close');
                window.classList.remove('uk-close');
                html.classList.remove('uk-modal-page');
                window.style.display="none";
            }else if(window.classList.contains("uk-close")){
                window.classList.remove('uk-close');


       }
}
}

