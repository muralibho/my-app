import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { HooksComponent } from './hooks/hooks.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostComponent } from './post/post.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicles.component';

const routes: Routes = [
                        {path:'login', component: LoginComponent},
                        {path:'dashboard',component: DashboardComponent, canActivate:[AuthGuard],children:[
                          {path:'calculator', component:CalculatorComponent},
                          {path:'interpolation', component:InterpolationComponent},
                          {path:'event-binding',component:EventbindingComponent},
                          {path:'two-way-binding',component:TwowaybindingComponent},
                          {path:'rectangle',component:RectangleComponent},
                          {path:'square',component:SquareComponent},
                          {path:'power',component:PowerComponent},
                          {path:'event-registration',component:EventregistrationComponent},
                          {path:'employee-registration',component:EmployeeRegistrationComponent},
                          {path:'cart', component:CartComponent},
                          {path:'pipes', component:PipesComponent},
                          {path:'cars', component:CarsComponent},
                          {path:'star', component:StarComponent},
                          {path:'gpay', component:GpayComponent},
                          {path:'bank', component:BankComponent},
                          {path:'hooks', component:HooksComponent},
                          {path:'vehicle', component:VehicleComponent},
                          {path:'post', component:PostComponent},
                          {path:'flipkart', component:FlipkartComponent},
                          {path:'mail', component:MailComponent},
                          {path:'boredom', component:BoredomComponent},
                          {path:'bank-details/:id', component:BankDetailsComponent},
                          {path:'vehicle-details/:id', component:VehicleDetailsComponent},
                          {path:'create-account', component:CreateAccountComponent, canDeactivate:[NotifyGuard]},
                          {path:'create-vehicle', component:CreateVehicleComponent},
                          {path:'create-user', component:CreateUserComponent},
                          {path:'create-product', component:CreateProductComponent}
                          
                        ]},
                        {path:'',component:LoginComponent},
                        {path:'***', component:PagenotfoundComponent}
                      ]
                        
                        
                      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
