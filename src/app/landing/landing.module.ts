import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from '../products/products.module';
import { MyaccountModule } from '../myaccount/myaccount.module';
import { OthersModule } from '../others/others.module';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule

  ]
})
export class LandingModule { }
