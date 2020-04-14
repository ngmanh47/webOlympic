import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-school-admin',
  templateUrl: './school-admin.component.html',
})
export class SchoolAdminComponent implements OnInit {
  showFormAdd = false;
  showFormUpdate = false;
  showFormDelete = false;
  tentruong='';
  taikhoan='';
  matkhau='';
  value='';
  a='';
  b='';
  c='';
  d='';
  arrTeacherAccount=[
    {
      STT: 1,
      ID: "HCMUS",
      Name: "Lương Vĩ Minh",
      Username: "lvm123",
      Password: "123"
    },
    {
      STT: 2,
      ID: "HCMUS",
      Name: "Nguyễn Văn Thầy",
      Username: "nvt123",
      Password: "123"
    },
    {
      STT: 3,
      ID: "HCMUS",
      Name: "Phan Thị Cô",
      Username: "ptc123",
      Password: "123"
    }
  ];
  arrStudentAccount=[
    {
      STT: 1,
      ID: "HCMUS",
      StudentID: 1712626,
      Name: "Dương Thành Nhân",
      Username: "dtn123",
      Password: "123"
    },
    {
      STT: 2,
      ID: "HCMUS",
      StudentID: 1712589,
      Name: "Nguyễn Ngọc Mạnh",
      Username: "nnm123",
      Password: "123"
    },
    {
      STT: 3,
      ID: "HCMUS",
      StudentID: 1712801,
      Name: "Đoàn Phước Thống",
      Username: "dpt123",
      Password: "123"
    },
    {
      STT: 4,
      ID: "HCMUS",
      StudentID: 1712432,
      Name: "Đỗ Hiếu",
      Username: "dh123",
      Password: "123"
    }
  ];

  // t dùng hàm nhiều r mà. ví dụ nè
  constructor() { }
  getValueOfSelect(obj){
    this.value=obj;

    this.a=this.arrTeacherAccount[this.value].ID;
    this.b=this.arrTeacherAccount[this.value].Name;
    this.c=this.arrTeacherAccount[this.value].Username;
    this.d=this.arrTeacherAccount[this.value].Password;
  }
  resetVar(){
    this.tentruong='';
    this.taikhoan='';
    this.matkhau='';
    this. value='';
    this. b='';
    this. c='';
    this. d='';
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
  addTeacherAccount(){
    this.arrTeacherAccount.push({
      ID: "HCMUS",
      Name:this.tentruong,
      Username: this.taikhoan,
      Password:this.matkhau,
      STT: this.arrTeacherAccount.length + 1
    });
    this.tentruong='';
    this.taikhoan='';
    this.matkhau='';
    this. value='';
}
UpdateTeacherAccount(){
  if(this.tentruong != ""){
    this.arrTeacherAccount[this.value].Name=this.tentruong;
  }
  else{
    this.arrTeacherAccount[this.value].Name=this.b;
  }
  if(this.taikhoan != ""){
    this.arrTeacherAccount[this.value].Username=this.taikhoan;
  }
  else{
    this.arrTeacherAccount[this.value].Username=this.c;
  }
  if(this.matkhau != ""){
    this.arrTeacherAccount[this.value].Password=this.matkhau;
  }
  else{
    this.arrTeacherAccount[this.value].Password=this.d;
  }
  this.resetVar();
}
DeleteTeacherAccount(){
  if(parseInt(this.value) < this.arrTeacherAccount.length && parseInt(this.value)>=0){
    this.arrTeacherAccount.splice(parseInt(this.value) , 1);
    for(var i=0;i<this.arrTeacherAccount.length;i++){
          this.arrTeacherAccount[i].STT=i+1;
    }
  }
  this.resetVar();
}
  ngOnInit() {
  }

}
