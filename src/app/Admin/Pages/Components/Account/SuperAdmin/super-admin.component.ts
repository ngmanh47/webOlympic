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
  value='';
  a='';
  b='';
  c='';
  d='';

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
  getValue(){

  }
  getValueOfSelect(obj){
    this.value=obj;

    this.a=this.arrSChoolAccount[this.value].ID;
    this.b=this.arrSChoolAccount[this.value].Name;
    this.c=this.arrSChoolAccount[this.value].Username;
    this.d="123";
    //doi ten bien xem sao m:))). ok fix bug pro
    // this.d=this.arrSChoolAccount[this.value].Password;
  }
  resetVar(){
    this.a='';
    this.b='';
    this.c='';
    this.d='';
    this.matruong='';
    this.tentruong='';
    this.taikhoan='';
    this.matkhau='';
    this.value='';
  }
  getFormAdd(){
    this.resetVar();
    this.showFormAdd=!this.showFormAdd;
    this.showFormDelete=false;
    this.showFormUpdate=false;
  }
  getFormUp(){

    this.resetVar();
    this.showFormAdd=false
    this.showFormDelete=false;
    this.showFormUpdate=!this.showFormUpdate;
  }
  getFormDe(){
    this.resetVar();

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
      this.resetVar();
  }
  UpdateSchoolAdmin(){
    if(this.matruong != ""){
      this.arrSChoolAccount[this.value].ID=this.matruong;
    }
    else{
      this.arrSChoolAccount[this.value].ID=this.a;
    }
    if(this.tentruong != ""){
      this.arrSChoolAccount[this.value].Name=this.tentruong;
    }
    else{
      this.arrSChoolAccount[this.value].Name=this.b;
    }
    if(this.taikhoan != ""){
      this.arrSChoolAccount[this.value].Username=this.taikhoan;
    }
    else{
      this.arrSChoolAccount[this.value].Username=this.c;
    }
    if(this.matkhau != ""){
      this.arrSChoolAccount[this.value].Password=this.matkhau;
    }
    else{
      this.arrSChoolAccount[this.value].Password=this.d;
    }
    this.resetVar();
  }
  DeleteSchoolAdmin(){
    if(parseInt(this.value) < this.arrSChoolAccount.length && parseInt(this.value)>=0){
      this.arrSChoolAccount.splice(parseInt(this.value) , 1);
      for(var i=0;i<this.arrSChoolAccount.length;i++){
            this.arrSChoolAccount[i].STT=i+1;
      }
    }
    this.resetVar();
  }
}
