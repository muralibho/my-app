import { Component, OnInit } from '@angular/core';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
   
    public name: string = "";
    public age: number = 0;
    public company: string= "";
    public package: number = 0;
    public percentage: number=0;

    public employees: any =[ {name:'murali', age:23, company:'philips', package:8, percentage:20},
  {name:'naveen', age:26, company:'AmericanAirlines', package:15, percentage:40}]

    

    
  constructor() { }

  ngOnInit(): void {
  }

     register(){
         let employee = {
             name: this.name,
             age: this.age,
             company:this.company,
             package: this.package,
             percentage:this.percentage
           }
        this.employees.push(employee);

         this.name="";
         this.age=0;
         this.company="";
         this.package=0;
         this.percentage=0;

      alert("registered successfully");
    
  }
  delete(i:number){
    this.employees.splice(i,1);
  }

}
