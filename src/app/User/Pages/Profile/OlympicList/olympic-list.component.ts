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

  olympicList$:any=[]
  oldPassword:string = '';
  newPassword:string = '' ;
  confirmPassword:string = '' ;
  URL_up_password:string='https://strapi-atlas.herokuapp.com/accounts/update-password';
  constructor(private httpc: HttpClient) { }

  ngOnInit() {
    this.CapNhatDanhSach();
  }
  GuiYeuCauCapNhat(){
    Swal.fire('Thành công', 'Chờ API', 'success');
  }
  DangKyTeamOlympic(){
    Swal.fire('Thành công', 'Chờ API', 'success');
  }
  CapNhatDanhSach(){
      this.getDanhSach()
      .subscribe(temp=>{
        this.olympicList$=temp['history'];
        this.olympicList$ = Array.of(this.olympicList$);
      })
  }
  getDanhSach(){
    return this.httpc.get('https://strapi-atlas.herokuapp.com/accounts/history?id='+localStorage.id+'&token='+localStorage.token);
  }
}
