import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
   selector: 'app-vehicles',
   templateUrl: './vehicles.component.html',
   styleUrls: ['./vehicles.component.css']
})
export class VehicleComponent implements OnInit {

   public column : string= "";
   public order : string= "";

   public vehicles: any= [];
   public term: string = "";
   
   constructor(private _vehicleService: VehicleService, private router:Router) {

      this._vehicleService.getVehicles().subscribe(
         (data: any) => {
            this.vehicles = data;
         },
         (err: any) => {
            alert("Internal server error");
         }
      )
   }

   ngOnInit(): void {
   }
   filter(){
      this._vehicleService.getFilteredVehicles(this.term).subscribe(
         (data:any)=>{
            this.vehicles = data;
         },
         (err:any)=>{
            alert("Internal server error");
         }
      )
   }

   sort(){
      this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
         (data:any)=>{
            this.vehicles = data;
         },
         (err:any)=>{
            alert("Internal server error");
         }
      )
   }
   pagination(page:number){
      this._vehicleService.getPagedVehicles(page).subscribe(
         (data:any)=>{
            this.vehicles = data;
         },
         (err:any)=>{
            alert("Internal server error");
         }
      )
   }

   view(id:string){
      this.router.navigateByUrl('/dashboard/vehicle-details/'+id);
   }





}
