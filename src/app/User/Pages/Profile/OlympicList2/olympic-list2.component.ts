import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import Swal from 'sweetalert2/dist/sweetalert2.js';

import * as $ from 'jquery';
@Component({
  selector: 'app-olympic-list',
  templateUrl: './olympic-list2.component.html',
  styleUrls: ['./olympic-list2.component.css']
})
export class OlympicList2Component implements OnInit {

  olympicList$:any=[]
  khoa:string = '';
  year:string = '' ;
  mssv:string = '' ;
  sdt:string = '' ;
  URL_up_password:string='https://strapi-atlas.herokuapp.com/accounts/update-password';
  inforUser: any=[];
  constructor(private httpc: HttpClient) { }

  ngOnInit() {
    this.CapNhatDanhSach();
    this.getUser();
  }
  GuiYeuCauCapNhat(){
    Swal.fire('Thành công', 'Chờ API', 'success');
  }
  postTeamOlympic2(){
    const options = {
      headers:new HttpHeaders({
        'Content-Type':'text/plain'
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
      "Grade": $("#khoithi").val(),
    },options);
  }
  DangKyTeamOlympic2(){
    this.postTeamOlympic2()
      .subscribe(temp => {
        Swal.fire('Thành công', temp, 'success').then((result) => {
          location.reload();
          })
      });
  }
  CapNhatDanhSach(){
      this.getDanhSach()
      .subscribe(temp=>{
        this.olympicList$=temp['history'];
        this.olympicList$ = Array.of(this.olympicList$);
      })
  }
  getDanhSach(){
    return this.httpc.get('https://strapi-atlas.herokuapp.com/olp-universities/find-all-olp-history?id='+localStorage.id+'&token='+localStorage.token);
  }
  getData(token, id){
    return this.httpc.get('https://strapi-atlas.herokuapp.com/accounts/'+ '?token='+token +'&id=' +id);
  }
  getUser(){
    this.getData(localStorage.token, localStorage.id).subscribe((data) => {
      this.inforUser = data['temp'][0];
    });
  }
}
