import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  inforUser: any = {};
  constructor(private http: HttpClient) { 
    this.getUser();
  }

  ngOnInit(): void {
  }
  
  getData(token, id){
    console.log('https://strapi-atlas.herokuapp.com/accounts/'+ '?token='+token +'&id=' +id);
    return this.http.get('https://strapi-atlas.herokuapp.com/accounts/'+ '?token='+token +'&id=' +id);
  }
  getUser(){
    this.getData(localStorage.token, localStorage.id).subscribe((data) => {
      console.log(data);
      console.log(data['temp']);
      console.log(data['temp'][0]);
      this.inforUser = data['temp'][0];
    });
  }
}
