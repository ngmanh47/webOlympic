import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
})
export class SuperAdminComponent implements OnInit {
  isShowFormAdd=false;
  showFormAdd = false;
  showFormUpdate = false;
  showFormDelete = false;
  tentruong='';
  matruong='';
  taikhoan='';
  matkhau='';
  arrSChoolAccount=[
  {
    STT: 1,
    ID: "HCMUS",
    Name: "Đại học KHTN - Đại học QGTPHCM",
    Username: "humus123",
    Password: "123"
  },
  {
    STT: 2,
    ID: "HCMUT",
    Name: "Đại học bách khoa - Đại học QGTPHCM",
    Username: "humut123",
    Password: "123"
  },
  {
    STT: 3,
    ID: "HCMUTE",
    Name: "Đại học sư phạm kĩ thuật",
    Username: "humute123",
    Password: "123"
  }
];
  constructor() { }

  ngOnInit() {
  }
  getFormAdd(){
    this.showFormAdd=!this.showFormAdd;
    this.showFormDelete=false;
    this.showFormUpdate=false;
  }
  getFormUp(){
    this.showFormAdd=false
    this.showFormDelete=false;
    this.showFormUpdate=!this.showFormUpdate;
  }
  getFormDe(){
    this.showFormAdd=false;
    this.showFormDelete=! this.showFormDelete;
    this.showFormUpdate=false;
  }
  addSchoolAdmin(){
      this.arrSChoolAccount.push({
        ID: this.matruong,
        Name:this.tentruong,
        Username: this.taikhoan,
        Password:this.matkhau,
        STT: this.arrSChoolAccount.length + 1
      });
  }
}
