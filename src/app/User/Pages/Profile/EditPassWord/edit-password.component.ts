import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPassWordComponent implements OnInit {

  oldPassword:string = '';
  newPassword:string = '' ;
  URL_up_password:string='https://strapi-atlas.herokuapp.com/accounts/update-password';
  constructor(private httpc: HttpClient) { }

  ngOnInit() {
  }
  XoaDulieu(){
    this.oldPassword='';
    this.newPassword='';
  }
  CapNhatMatKhau(){
    this.postCapNhatMatKhau()
    .subscribe(temp=>{
      console.log(temp);
    })
    this.oldPassword='';
    this.newPassword='';
    alert("thjafnh coong")
    location.reload();

  }
  postCapNhatMatKhau(){
    const options = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    var dataPost = {
      id:localStorage.id,
      token: localStorage.token,
      oldpassword:this.oldPassword,
      newpassword:this.newPassword
    }
    return this.httpc.post(this.URL_up_password,dataPost,options);
  }
}
