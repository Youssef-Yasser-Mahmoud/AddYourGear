import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (p) => p.AboutComponent
      ),
  },
  { path: 'products', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
