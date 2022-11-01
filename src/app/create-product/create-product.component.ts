import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

    public productForm: FormGroup = new FormGroup(
      {
       name : new FormControl(),
       price: new FormControl(),
       expiry: new FormControl(),
       deliveryaddress: new FormGroup(
        {
          HNO: new FormControl(),
          city: new FormControl(),
          pin: new FormControl()
        }
       ),
        comments: new FormArray([]),
       payment: new FormControl(),
       card: new FormControl(),
       upi: new FormControl()
      }
    )

    get commentsFormArray(){
         return this.productForm.get('comments') as FormArray;
    }

    addComments(){
      this.commentsFormArray.push(
        new FormGroup(
          {
            
           message: new FormControl(),
           time: new FormControl()
          }
        )
      )
    }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.productForm);
      
  }
  

}
