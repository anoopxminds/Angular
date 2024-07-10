import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header-component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {BannerComponent} from "./home/banner/banner.component";
import {ProductsComponent} from "./products/products.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactComponent} from "./contact/contact.component";
import {NotFoundComponent} from "./not-found/not-found.component";
// import {CanActivateFun} from "./auth.guard";
import { CheckoutComponent } from './checkout/checkout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./Services/auth-interceptor.service";
import {LoggingInterceptorService} from "./Services/logging-interceptor.servive";
import { LoaderComponent } from './utility/loader/loader.component';
import { SnackbarComponent } from './utility/snackbar/snackbar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  // {path: 'products', component: ProductsComponent, canActivate: [CanActivateFun]},
  {path: 'products', component: ProductsComponent},
  // {path: 'products/product/id', component: ProductDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,
    ProductsComponent,
    FooterComponent,
    ContactComponent,
    NotFoundComponent,
    CheckoutComponent,
    LoaderComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
