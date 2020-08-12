import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as $ from 'jquery';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  inforUserEdit: any={};
  inforUser: any = {};
  constructor(private http: HttpClient) {
    this.getUser();
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#clickEditProfile").click(function(){
          $("#EditProfile").modal('show');
      });
  });
  }
  updateProfile(){
    Swal.fire('CHỜ', 'API', 'success')
  }
  getData(token, id){
    return this.http.get('https://strapi-atlas.herokuapp.com/accounts/'+ '?token='+token +'&id=' +id);
  }
  getUser(){
    this.getData(localStorage.token, localStorage.id).subscribe((data) => {
      this.inforUser = data['temp'][0];
      console.log(this.inforUser);
    });
  }
}
