import { Component, OnInit } from '@angular/core';
import { ApiResponseModel, Hospital, Login } from './apiServices/classess/hospital.model';
import { HospitalService } from './apiServices/service/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'secondProject';
  openPopup: boolean = false; 
  
  public loginObj: Login = new Login();
  loggedHospitalData: Hospital = new Hospital()

  constructor(private _hospitalService: HospitalService, private _router: Router){
    const loggData = localStorage.getItem('practoLogin');
    console.log(loggData, "20");
    if(loggData != null){
      this.loggedHospitalData = JSON.parse(loggData)
    }
  }


  ngOnInit(){
    
  }

  openModel(){
    this.openPopup = true;
  }

  cancelClick(){
    this.openPopup = !this.openPopup
  }

  loginForm(){
    this._hospitalService.onLogin(this.loginObj).subscribe((res: ApiResponseModel) =>{
      console.log(res); 
      if(res.result){
        alert("login successfull");
        this.loggedHospitalData = res.data;
        localStorage.setItem('practoLogin', JSON.stringify(res.data))
        this.openPopup = false;
        
      }else{
        alert(res.message);
      }
    },error=>{
      alert(JSON.stringify(error))
    }
  )
  }

  logOff(){
    localStorage.removeItem('practoLogin');
    this.loggedHospitalData = new Hospital();
    this.loginObj = new Login();
    this._router.navigate(['/home'])
    
  }
  
}
