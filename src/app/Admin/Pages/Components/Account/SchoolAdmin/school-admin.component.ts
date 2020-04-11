import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-admin',
  templateUrl: './school-admin.component.html',
})
export class SchoolAdminComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
