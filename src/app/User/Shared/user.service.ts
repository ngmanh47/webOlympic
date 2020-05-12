import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  readonly rootUrl = 'https://strapi-atlas.herokuapp.com/accounts';
  constructor(private http:HttpClient) { 
  
  }

  registerUser(username, password){
    const data = {
      email: username,
      password: password
    }
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(this.rootUrl + '/signup', data, {headers : headers});
  }
  
  login(username, password){
    // var data = "email=" + username +"&password=" + password;
    // var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    // return this.http.post<Token>(this.rootUrl + '/signin', data, {headers: reqHeader});

    var data = {
      email: username,
      password: password
    }
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(this.rootUrl + '/signin', data, {headers: headers});
  }
}
