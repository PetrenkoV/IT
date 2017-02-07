import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: 'product', component: ProductComponent},
    { path: 'product/:id', component: ProductDetailComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}