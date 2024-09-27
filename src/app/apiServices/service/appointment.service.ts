import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ApiResponseModel, Appointmet } from '../classess/hospital.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService implements OnInit{

  constructor(private _http: HttpClient) { }


  ngOnInit(){
    
  }

  addNewAppointment(data: Appointmet): Observable<ApiResponseModel>{
    return this._http.post<ApiResponseModel>(environment.api_url + Constant.API_END_POINT.ADD_NEW_APPOINTMENT, data)
  }
}
