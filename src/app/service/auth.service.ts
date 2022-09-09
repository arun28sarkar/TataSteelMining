import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getOptRequest, getOtpResponse } from '../interfaces/mobile-verify';
import { Observable } from 'rxjs';
import { RegistrationRequest, RegistrationResponse } from '../interfaces/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly LOGIN_URL: String = 'login';
  private readonly REGISTER_URL: String = 'register';
  private readonly GET_OTP_URL: String = 'send-mobile-otp';
  private readonly VERIFY_OTP_URL: String = 'verify-mobile-otp';

  constructor(private _http: HttpClient) { }

  register(requestData: RegistrationRequest): Observable<RegistrationResponse> {
    return this._http.post<RegistrationResponse>(`${environment.apiEndpointBase}/${this.REGISTER_URL}`, requestData);
  }

  getOtp(requestData: getOptRequest): Observable<getOtpResponse> {
    return this._http.post<getOtpResponse>(`${environment.apiEndpointBase}/${this.GET_OTP_URL}`, requestData);
  }
}
