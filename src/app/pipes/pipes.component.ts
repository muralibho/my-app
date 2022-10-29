import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string = "pipes format";
  public city:string = "HYDERABAD";
  public dob: string = "10-08-2022";
  public today:Date = new Date();
  public user:any= {name:'Abc', phone:85200};
 
  constructor() { }

  ngOnInit(): void {
  }

}
