import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
baseUrl=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

postRequest(url,data)
{
return this.httpClient.post(this.baseUrl+url,data)
}
}
