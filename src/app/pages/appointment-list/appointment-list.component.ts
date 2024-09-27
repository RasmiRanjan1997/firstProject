import { Component, OnInit } from '@angular/core';
import { ApiResponseModel, Appointmet, Hospital } from 'src/app/apiServices/classess/hospital.model';
import { AppointmentService } from 'src/app/apiServices/service/appointment.service';
import { HospitalService } from 'src/app/apiServices/service/hospital.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  appointmentObj: Appointmet = new Appointmet()
  

  constructor(private _appointmentService: AppointmentService){
    this.appointmentObj.gender = 'male'

    const loggedData = localStorage.getItem('practoLogin');
    if(loggedData != null){
      this.appointmentObj.hospitalId = JSON.parse(loggedData).hospitalId;
      // this.appointmentObj = new Appointmet();
      console.log(this.appointmentObj.hospitalId);
    }
    console.log();
  }

  ngOnInit(){

  }


  bookAppointment(){
    console.log(this.appointmentObj);
    this._appointmentService.addNewAppointment(this.appointmentObj).subscribe((res: ApiResponseModel) =>{
      console.log("object");
      if(res.result){
        alert('Appointment created Successfully')
      }else{
        alert(res.message)
      }
    }, error =>{
      alert(JSON.stringify(error))
    }
  )
  }

}
