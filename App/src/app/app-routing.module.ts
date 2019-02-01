import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { EditCartComponent } from './edit-cart/edit-cart.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AuthGuard} from './auth.guard'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component:LoginComponent
  },
  {
    path:'Products',
    component:ProductsComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'Products/:ProductID',
    component:ProductDetailsComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'Cart',
    component:CartComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'CartAdmin',
    component:AdminViewComponent,
    canActivate:[AuthGuard],
    data:{roles:"admin"}
 
  }, 

  {
    path:'EditCart/:PurchaseID',
    component:EditCartComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
