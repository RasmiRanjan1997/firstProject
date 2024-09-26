import { Component, OnInit } from '@angular/core';
import { Appointmet } from 'src/app/apiServices/classess/hospital.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  appointmentObj: Appointmet = new Appointmet()

  constructor(){
    console.log(this.appointmentObj);
  }

  ngOnInit(){

  }

}
