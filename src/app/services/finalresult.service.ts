import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FinalresultService {

  constructor(public http:HttpClient) { }
  Final(){
    return this.http.get(environment.url+'/finalresult')
  }
}
