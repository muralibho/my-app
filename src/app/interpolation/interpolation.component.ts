import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
   public age:number = 30;
   public name:string= 'murali';
   public isIndian:boolean = true;
   public ages:number[]= [20,40,60,80];
   public names:string[]= ["murali","shiva","jay"];
   public products: any =[{name:'bag', price:600},
                          {name:'laptop', price:80000},
                          {name:'tv', price:100000},
                          {name:'speakers', price:7500}
                         ];

     public educations: any = [{qualification: 'mca', college: 'holy mother', year:2019},
                               {qualification: 'degree', college: 'new noble', year:2016},
                               {qualification: 'inter', college: 'ideal junior', year:2014},
                               {qualification: 'ssc', college: 'donalds', year:2013}
                              ] ;          
                              
     public vehicles: any = [{"Vehicle":"Bugatti Beetle","manufacturer":"Kia","model":"V90","type":"Crew Cab Pickup","fuel":"Electric","color":"grey","image":"http://loremflickr.com/640/480/transport","id":"1"},{"Vehicle":"Smart Malibu","manufacturer":"Aston Martin","model":"Malibu","type":"Convertible","fuel":"Diesel","color":"olive","image":"http://loremflickr.com/640/480/animals","id":"2"},{"Vehicle":"Jaguar Silverado","manufacturer":"Hyundai","model":"Spyder","type":"Convertible","fuel":"Gasoline","color":"sky blue","image":"http://loremflickr.com/640/480/business","id":"3"},{"Vehicle":"Honda XTS","manufacturer":"Audi","model":"A8","type":"Wagon","fuel":"Gasoline","color":"gold","image":"http://loremflickr.com/640/480/abstract","id":"4"},{"Vehicle":"Kia 2","manufacturer":"Cadillac","model":"Alpine","type":"Sedan","fuel":"Gasoline","color":"magenta","image":"http://loremflickr.com/640/480/transport","id":"5"},{"Vehicle":"Lamborghini El Camino","manufacturer":"Jeep","model":"Spyder","type":"Hatchback","fuel":"Gasoline","color":"turquoise","image":"http://loremflickr.com/640/480/business","id":"6"},{"Vehicle":"Tesla Durango","manufacturer":"BMW","model":"2","type":"Wagon","fuel":"Diesel","color":"salmon","image":"http://loremflickr.com/640/480/cats","id":"7"},{"Vehicle":"Honda CX-9","manufacturer":"Polestar","model":"Golf","type":"Crew Cab Pickup","fuel":"Electric","color":"tan","image":"http://loremflickr.com/640/480/people","id":"8"},{"Vehicle":"Honda Focus","manufacturer":"Cadillac","model":"Civic","type":"Wagon","fuel":"Diesel","color":"orange","image":"http://loremflickr.com/640/480/nightlife","id":"9"},{"Vehicle":"Chrysler Civic","manufacturer":"Porsche","model":"XC90","type":"Coupe","fuel":"Hybrid","color":"tan","image":"http://loremflickr.com/640/480/nature","id":"10"},{"Vehicle":"Honda V90","manufacturer":"Ford","model":"Model T","type":"Cargo Van","fuel":"Gasoline","color":"plum","image":"http://loremflickr.com/640/480/business","id":"11"},{"Vehicle":"Hyundai Fiesta","manufacturer":"Fiat","model":"Colorado","type":"Passenger Van","fuel":"Diesel","color":"magenta","image":"http://loremflickr.com/640/480/nature","id":"12"},{"Vehicle":"Maserati Model T","manufacturer":"Land Rover","model":"Land Cruiser","type":"SUV","fuel":"Gasoline","color":"white","image":"http://loremflickr.com/640/480/abstract","id":"13"},{"Vehicle":"Hyundai A4","manufacturer":"Maserati","model":"A4","type":"Extended Cab Pickup","fuel":"Electric","color":"tan","image":"http://loremflickr.com/640/480/abstract","id":"14"},{"Vehicle":"Rolls Royce XTS","manufacturer":"BMW","model":"Alpine","type":"Passenger Van","fuel":"Hybrid","color":"maroon","image":"http://loremflickr.com/640/480/sports","id":"15"},{"Vehicle":"Honda Focus","manufacturer":"Audi","model":"Volt","type":"Minivan","fuel":"Electric","color":"purple","image":"http://loremflickr.com/640/480/fashion","id":"16"},{"Vehicle":"Dodge Challenger","manufacturer":"Jaguar","model":"Silverado","type":"Convertible","fuel":"Electric","color":"salmon","image":"http://loremflickr.com/640/480/nature","id":"17"},{"Vehicle":"Volkswagen Cruze","manufacturer":"Jaguar","model":"Altima","type":"Cargo Van","fuel":"Electric","color":"fuchsia","image":"http://loremflickr.com/640/480/abstract","id":"18"},{"Vehicle":"Aston Martin Impala","manufacturer":"Ford","model":"Challenger","type":"Crew Cab Pickup","fuel":"Hybrid","color":"purple","image":"http://loremflickr.com/640/480/sports","id":"19"},{"Vehicle":"Aston Martin Expedition","manufacturer":"Mercedes Benz","model":"F-150","type":"Convertible","fuel":"Electric","color":"mint green","image":"http://loremflickr.com/640/480/city","id":"20"},{"Vehicle":"Jeep Sentra","manufacturer":"Lamborghini","model":"2","type":"Sedan","fuel":"Diesel","color":"pink","image":"http://loremflickr.com/640/480/fashion","id":"21"},{"Vehicle":"BMW Cruze","manufacturer":"Mazda","model":"Focus","type":"Crew Cab Pickup","fuel":"Gasoline","color":"lavender","image":"http://loremflickr.com/640/480/cats","id":"22"},{"Vehicle":"Aston Martin Spyder","manufacturer":"Mazda","model":"Roadster","type":"Cargo Van","fuel":"Hybrid","color":"magenta","image":"http://loremflickr.com/640/480/fashion","id":"23"},{"Vehicle":"Smart Explorer","manufacturer":"Kia","model":"Land Cruiser","type":"Passenger Van","fuel":"Gasoline","color":"white","image":"http://loremflickr.com/640/480/animals","id":"24"},{"Vehicle":"Porsche Altima","manufacturer":"Bentley","model":"2","type":"Minivan","fuel":"Gasoline","color":"ivory","image":"http://loremflickr.com/640/480/people","id":"25"},{"Vehicle":"Bugatti Aventador","manufacturer":"Ferrari","model":"2","type":"Convertible","fuel":"Electric","color":"black","image":"http://loremflickr.com/640/480/cats","id":"26"}];

  constructor() { }

  ngOnInit(): void {
  }

}
