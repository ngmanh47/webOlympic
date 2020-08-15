import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import * as $ from 'jquery';
@Component({
  selector: 'app-olympic-list',
  templateUrl: './olympic-list.component.html',
  styleUrls: ['./olympic-list.component.css']
})
export class OlympicListComponent implements OnInit {

  icpcYear: any = [];
  icpcEmpty: any = [];
  olympicList$: any = [];
  oldPassword:string = '';
  newPassword:string = '' ;
  confirmPassword:string = '' ;
  URL_up_password:string='https://strapi-atlas.herokuapp.com/accounts/update-password';
  constructor(private httpc: HttpClient) { }

  ngOnInit() {
    this.CapNhatDanhSach();
    this.ICPCYEAR();
  }
  GuiYeuCauCapNhat(){
    Swal.fire('Thành công', 'Chờ API', 'success');
  }
  ICPCTeam() {
    this.getICPCteam()
    .subscribe(temp => {
    this.icpcEmpty=temp['data'];
      console.log(this.icpcEmpty);
  })
  }
  getICPCteam(){
    return this.httpc.get('https://strapi-atlas.herokuapp.com/icpc-teams/find-all-icpc-not-enough?id='+localStorage.id+'&token='+localStorage.token);
  }
  PostDangKyTeamOlympic() {
    const options = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.httpc.post("https://strapi-atlas.herokuapp.com/accounts/jointeam", {
      "token":localStorage.token,
      "id": localStorage.id,
      "icpcteam":$("#icpcteam").val()
    },options);
  }
  DangKyTeamOlympic() {
    this.PostDangKyTeamOlympic()
        .subscribe(response => {
          Swal.fire('Thành công', response, 'success');
        },
        err => {
          if( err[`error`].text!="Cap nhat thanh cong !")
          {
            Swal.fire('Lỗi người dùng', err[`error`].text, 'warning').then((result) => {
              location.reload();
            })
          }
          else Swal.fire('Thành công', err[`error`].text, 'success').then((result) => {
            location.reload();
          })
        });
  }
  CapNhatDanhSach(){
      this.getDanhSach()
        .subscribe(temp => {
        this.olympicList$=temp['history'];
          this.olympicList$ = Array.of(this.olympicList$);
      })
  }
  getDanhSach(){
    return this.httpc.get('https://strapi-atlas.herokuapp.com/accounts/history?id='+localStorage.id+'&token='+localStorage.token);
  }
  ICPCYEAR(){
    this.getICPCYEAR()
      .subscribe(temp => {
      this.icpcYear=temp['data'];
        console.log(this.icpcYear);
    })
}
getICPCYEAR(){
  return this.httpc.get('https://strapi-atlas.herokuapp.com/icpc-teams/find-all-icpc-history-on-year?id='+localStorage.id+'&token='+localStorage.token+'&year=2020');
}
}
