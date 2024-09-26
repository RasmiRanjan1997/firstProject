import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constant } from '../constant/Constant';
import { ApiResponseModel, Hospital, Login } from '../classess/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  
  constructor(private _http: HttpClient) { }

  registerHospital(data: Hospital): Observable<ApiResponseModel>{
    return this._http.post<ApiResponseModel>(environment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL, data)
  }


  onLogin(data: Login): Observable<ApiResponseModel>{
    return this._http.post<ApiResponseModel>(environment.api_url + Constant.API_END_POINT.LOGIN_API, data);
  }
}
