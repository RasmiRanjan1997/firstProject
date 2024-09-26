import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiResponseModel, Hospital } from 'src/app/apiServices/classess/hospital.model';
import { HospitalService } from 'src/app/apiServices/service/hospital.service';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css']
})
export class NewHospitalComponent implements OnInit{

  public hospitalObj: Hospital = new Hospital();
  private subscription: Subscription[] = []

  constructor(private _hospitalServices: HospitalService){}

  ngOnInit() {
    
  }

  onRegister(){
    this.subscription.push(
      this._hospitalServices.registerHospital(this.hospitalObj).subscribe((res: ApiResponseModel) =>{
        if(res.result){
          alert("Registration Successfully");
        }else{
          alert(res.message)
        }
      },
    error =>{
      alert(JSON.stringify(error))
    })
    )
  }

  resetForm(){
    this.hospitalObj = new Hospital();
  }

}


