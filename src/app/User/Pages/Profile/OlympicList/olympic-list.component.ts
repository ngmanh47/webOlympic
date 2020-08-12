import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-olympic-list',
  templateUrl: './olympic-list.component.html',
  styleUrls: ['./olympic-list.component.css']
})
export class OlympicListComponent implements OnInit {

  oldPassword:string = '';
  newPassword:string = '' ;
  confirmPassword:string = '' ;
  URL_up_password:string='https://strapi-atlas.herokuapp.com/accounts/update-password';
  constructor(private httpc: HttpClient) { }

  ngOnInit() {
  }
  XoaDulieu(){
    this.oldPassword='';
    this.newPassword='';
  }
  CapNhatMatKhau(){
    if(this.oldPassword == "" || this.newPassword == "" || this.confirmPassword == ""){
    Swal.fire('Lỗi người dùng', 'Không được bỏ trống dữ liệu', 'warning')
      return;
    }
    if(this.newPassword != this.confirmPassword){
      Swal.fire('Lỗi người dùng', 'Mật khẩu không khớp', 'warning')
      return;
    }
    this.postCapNhatMatKhau()
    .subscribe(
      response => {
        Swal.fire('Thành công', response, 'success');
      },
      err => {
        if( err[`error`].text=="Cap nhat mat khau khong thanh cong !")
        {
          Swal.fire('Lỗi người dùng', err[`error`].text, 'warning');
          return;
        }
        else Swal.fire('Thành công', err[`error`].text, 'success');
      }
    )

    this.oldPassword='';
    this.newPassword='';
    this.confirmPassword='';
    //location.reload();

  }
  postCapNhatMatKhau(){
    const options = {
      headers:new HttpHeaders({
        accept: 'text/plain',
        'Content-Type': 'application/json'
      })
    };
    var dataPost = {
      id:localStorage.id,
      token: localStorage.token,
      oldpassword:this.oldPassword,
      newpassword:this.newPassword
    }
    return this.httpc.post(this.URL_up_password,JSON.stringify(dataPost),options);
  }
}
