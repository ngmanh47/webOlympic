import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Account } from '../account.model'
import { SuperAccount } from '../account.model'
import { SchoolAccount } from '../account.model'
import { TeacherAccount } from '../account.model'
import { StudentAccount } from '../account.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-school-admin',
  templateUrl: './school-admin.component.html',
})
export class SchoolAdminComponent implements OnInit {
  // account
  Accounts$:Account[];
  SuperAccounts$:SuperAccount[];
  SchoolAccounts$:SchoolAccount[];
  TeacherAccounts$:TeacherAccount[];
  StudentAccounts$:StudentAccount[];
  // hide,show form
  showFormAdd = false;
  showFormUpdate = false;
  showFormDelete = false;
  showFormUpgrade = false;
  // value of account
  email='';
  password='';
  university='';
  Name='';
  Sex='';
  BirthDate='';
  email_edit='';
  password_edit='';
  university_edit='';
  Name_edit='';
  Sex_edit='';
  BirthDate_edit='';

    // API
    URL_account='https://strapi-atlas.herokuapp.com/accounts/?token='+localStorage.token+'&id='+localStorage.id;
    URL_add_account='https://strapi-atlas.herokuapp.com/accounts/add';
    // API
    constructor(private httpc: HttpClient) {
      this.getAccount4Role();
    }
    getAllAccount(){
      return this.httpc.get(this.URL_account);
    }
    getAccount4Role(){
      this.getAllAccount().subscribe(data =>{
        this.Accounts$=data['data1'];
        console.log(this.Accounts$);
      })
    }
    getAccountWithRole(){
        //for(let i in this.Accounts$){
        for(let i=0;i<this.Accounts$.length;i++){
          if (this.Accounts$[i].Role==1){
            this.SuperAccounts$.push(this.Accounts$[i]);
          }
          else if (this.Accounts$[i].Role==2){
            this.SchoolAccounts$.push(this.Accounts$[i]);
          }
          else if (this.Accounts$[i].Role==3){
            this.TeacherAccounts$.push(this.Accounts$[i]);
          }
          else{
            this.StudentAccounts$.push(this.Accounts$[i]);
          }
        }
    }
  resetVar(){
    this.email='';
    this.password='';
    this.university='';
    this.Name='';
    this.Sex='';
    this.BirthDate='';
    this.email_edit='';
    this.password_edit='';
    this.university_edit='';
    this.Name_edit='';
    this.Sex_edit='';
    this.BirthDate_edit='';
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
  postTeacherAdmin(){
    return this.httpc.post(this.URL_add_account,{
      'token':localStorage.token,
      'id':localStorage.id,
      'email':this.email_edit,
      'password':this.password_edit,
      'university':this.university_edit,
      'Name':this.Name_edit,
      'Sex':this.Sex_edit,
      'BirthDate':this.BirthDate_edit,
      'Role':3
    })
  }
  addTeacherAccount(){
    this.postTeacherAdmin()
    .subscribe(temp=>{
      console.log(temp);
    })
   // this.resetVar();
}
UpdateTeacherAccount(){
  // if(this.tentruong != ""){
  //   this.arrTeacherAccount[this.value].Name=this.tentruong;
  // }
  // else{
  //   this.arrTeacherAccount[this.value].Name=this.b;
  // }
  // if(this.taikhoan != ""){
  //   this.arrTeacherAccount[this.value].Username=this.taikhoan;
  // }
  // else{
  //   this.arrTeacherAccount[this.value].Username=this.c;
  // }
  // if(this.matkhau != ""){
  //   this.arrTeacherAccount[this.value].Password=this.matkhau;
  // }
  // else{
  //   this.arrTeacherAccount[this.value].Password=this.d;
  // }
  // this.resetVar();
}
DeleteTeacherAccount(){
  // if(parseInt(this.value) < this.arrTeacherAccount.length && parseInt(this.value)>=0){
  //   this.arrTeacherAccount.splice(parseInt(this.value) , 1);
  //   for(var i=0;i<this.arrTeacherAccount.length;i++){
  //         this.arrTeacherAccount[i].STT=i+1;
  //   }
  // }
  // this.resetVar();
}
UpgradeAccountStudent(){
//   // xoa account in db accountStudent
//   if(parseInt(this.value) < this.arrStudentAccount.length && parseInt(this.value)>=0){
//     this.arrStudentAccount.splice(parseInt(this.value) , 1);
//     for(var i=0;i<this.arrStudentAccount.length;i++){
//           this.arrStudentAccount[i].STT=i+1;
//     }
//   }
//   // them account in db accountTeacher
//   // check var
//   if(this.tentruong===''){
//       this.tentruong=this.b;
//   }
//   if(this.taikhoan===''){
//     this.taikhoan=this.c;
// }
// if(this.matkhau===''){
//   this.matkhau=this.d;
// }
//   this.arrTeacherAccount.push({
//     ID: "HCMUS",
//     Name:this.tentruong,
//     Username: this.taikhoan,
//     Password:this.matkhau,
//     STT: this.arrTeacherAccount.length + 1
//   });
//   this.masv='';
//   this.resetVar();
}
  ngOnInit() {
  }

}
