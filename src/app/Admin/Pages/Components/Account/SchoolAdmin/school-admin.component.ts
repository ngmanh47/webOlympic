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
  matruong='';
  tentruong='';
  taikhoan='';
  matkhau='';
  value='';
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
     //alert(obj); // giờ m in ra chỗ này rồi sao t lấy số 2. obj là số 2
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

  ngOnInit() {
  }

}
