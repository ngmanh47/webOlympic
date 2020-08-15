import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import * as $ from 'jquery';
@Component({
  selector: 'app-olympic-list2',
  templateUrl: './olympic-list2.component.html',
  styleUrls: ['./olympic-list2.component.css']
})
export class OlympicList2Component implements OnInit {

  olpYear: any = [];
  listOlp:any=[]
  khoa:string = '';
  year:string = '' ;
  mssv:string = '' ;
  sdt:string = '' ;
  URL_up_password:string='https://strapi-atlas.herokuapp.com/accounts/update-password';
  inforUser: any=[];
  constructor(private httpc: HttpClient) { }

  ngOnInit() {
    this.CapNhatDanhSach();
    this.OLPYEAR();
  }
  GuiYeuCauCapNhat(){
    Swal.fire('Thành công', 'Chờ API', 'success');
  }
  postTeamOlympic2(){
    const options = {
      headers:new HttpHeaders({
        accept: 'text/plain',
        'Content-Type': 'application/json'
      })
    };
    return this.httpc.post("https://strapi-atlas.herokuapp.com/accounts/signup-olp-unversity", {
      "token":localStorage.token,
      "id": localStorage.id,
      "Name": this.inforUser.Name,
      "Birthday": this.inforUser.BirthDate,
      "Sex": this.inforUser.Sex,
      "MSSV": this.mssv,
      "Khoa": this.khoa,
      "Sdt": this.sdt,
      "Year": this.year,
      "Level": $("#level").val(),
      "Grade": $("#khoithi").val()
    },options);
  }
  DangKyTeamOlympic2(){
    this.postTeamOlympic2()
      .subscribe(response => {
        Swal.fire('Thành công', response, 'success');
      },
      err => {
        if( err[`error`].text!="Ban da dang ki tham gia thi thanh cong")
        {
          Swal.fire('Lỗi người dùng', err[`error`].text, 'warning').then((result) => {
            location.reload();
          })
        }
        else Swal.fire('Thành công', err[`error`].text, 'success').then((result) => {
          location.reload();
        })
      })
  }
  CapNhatDanhSach(){
      this.getDanhSach()
      .subscribe(temp=>{
        this.listOlp = temp['data'];
        console.log(this.listOlp);
      })
  }
  getDanhSach(){
    return this.httpc.get('https://strapi-atlas.herokuapp.com/olp-universities/find-all-olp-account?id='+localStorage.id+'&token='+localStorage.token);
  }
  getData(token, id){
    return this.httpc.get('https://strapi-atlas.herokuapp.com/accounts/'+ '?token='+token +'&id=' +id);
  }
  getUser(){
    this.getData(localStorage.token, localStorage.id).subscribe((data) => {
      this.inforUser = data['temp'][0];
    });
  }
  OLPYEAR(){
    this.getOLPYEAR()
      .subscribe(temp => {
      this.olpYear=temp['data'];
        console.log(this.olpYear);
    })
}
getOLPYEAR(){
  return this.httpc.get('https://strapi-atlas.herokuapp.com/olp-universities/find-all-olp-history-on-year?id='+localStorage.id+'&token='+localStorage.token+'&year=2020');
}
}
