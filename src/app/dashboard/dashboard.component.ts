import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem("my-app-token");
    this.router.navigateByUrl('/login');
  }

        //  public name: string= "";
        //  public age: number= 0;
        //  public company: string= "";
        //  public package: number= 0;

        //  public employees: any =[
        //   {name:'murali', age:24, company:'hcl', package:500000},
        //   {name:'sai', age:21, company:'cg', package:600000 }
        //  ]
  

  
    // register(){
    //   let employee ={
    //     name: this.name,
    //     age: this.age,
    //     company: this.company,
    //     package: this.package
    //   }
    //   this.employees.push(employee)

    //   this.name="";
    //   this.age=0;
    //   this.company="";
    //   this.package=0;
    // }
}
