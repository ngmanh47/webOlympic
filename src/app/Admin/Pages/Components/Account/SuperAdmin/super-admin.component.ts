import { Component, OnInit } from '@angular/core';
import { Account,SuperAccount, SchoolAccount,TeacherAccount,StudentAccount} from '../account.model'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
})
export class SuperAdminComponent implements OnInit {
  // account
  Accounts$:Account[];
  SuperAccounts$:SuperAccount[];
  SchoolAccounts$:SchoolAccount[];
  TeacherAccounts$:TeacherAccount[];
  StudentAccounts$:StudentAccount[];
  // hide, show form
  showFormAccount:Number;
  showForm1=false;
  showForm2=false;
  showForm3=false;
  showForm4=false;
// hide, show form add,update,delete with role 1
  showFormAdd1 = false;
  showFormUpdate1 = false;
  showFormDelete1 = false;
// hide, show form add,update,delete with role 2
  showFormAdd2 = false;
  showFormUpdate2 = false
  showFormDelete2= false;
// hide, show form add,update,delete with role 3
  showFormAdd3 = false;
  showFormUpdate3 = false;
  showFormDelete3 = false;
  // hide, show form add,update,delete with role 4
  showFormAdd4 = false;
  showFormUpdate4 = false;
  showFormDelete4 = false;
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
  university_id='';
  value='';
  Role:number;
  n:number; // so luong account hien co
  // API
  URL_account='https://strapi-atlas.herokuapp.com/accounts/?token='+localStorage.token+'&id='+localStorage.id;
  URL_add_account='https://strapi-atlas.herokuapp.com/accounts/add';
  URL_up_account='https://strapi-atlas.herokuapp.com/accounts/update';
  // API
  constructor(private httpc: HttpClient) {
    this.getAccount4Role();

  }
  showAccountWithRole(){
      this.Accounts$.forEach(element => {
        if(element.email==localStorage.email){
          if(element.Role==1){
            this.showFormAccount=1;
            this.showForm1=true;
            this.showForm2=true;
            this.showForm3=true;
            this.showForm4=true;
          }
          if(element.Role==2){
            this.showFormAccount=2;
            this.showForm2=true;
            this.showForm3=true;
            this.showForm4=true;
          }
          if(element.Role==3){
            this.showFormAccount=3;
            this.showForm3=true;
            this.showForm4=true;
          }
          if(element.Role==4){
            this.showFormAccount=4;
            this.showForm4=true;
          }
        }
      });
  }
  getAllAccount(){
    return this.httpc.get(this.URL_account);
  }
  getAccount4Role(){
    this.getAllAccount().subscribe(data =>{
      // get account
      this.Accounts$ = data['data1'];
      if(this.Accounts$ == undefined){
        this.Accounts$ = data['data2'];
        if(this.Accounts$==undefined){
          this.Accounts$ = data['data3'];
          if(this.Accounts$==undefined){
            this.Accounts$ = data['data4'];
          }
        }
      }
      // set 4 account {}
      this.SuperAccounts$ = [];
      this.SchoolAccounts$ = [];
      this.TeacherAccounts$ = [];
      this.StudentAccounts$ = [];

      console.log(this.Accounts$);
      this.getAccountWithRole();
      this.showAccountWithRole();

    })
  }

  getAccountWithRole(){
      // set phan tu mang
      this.Accounts$.forEach(element => {
        if (element.Role==1){
          this.SuperAccounts$.push(element);
        }
        else if (element.Role==2){
          this.SchoolAccounts$.push(element);
        }
        else if (element.Role==3){
          this.TeacherAccounts$.push(element);
        }
        else if (element.Role==4){
          this.StudentAccounts$.push(element);
        }
      });
  }
  getValueOfSelect(obj){
    this.value=obj;
    for(var i=0;i<this.Accounts$.length;i++){
      if(this.Accounts$[i].email==this.value){
        this.email=this.Accounts$[i].email;
        this.password=this.Accounts$[i].password;
        this.university=this.Accounts$[i].university.Name;
        this.Name=this.Accounts$[i].Name;
        this.Sex=this.Accounts$[i].Sex;
        this.BirthDate=this.Accounts$[i].BirthDate;
        this.university_id=this.Accounts$[i].university.id
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
  getFormAdd(role:number){
    this.resetVar();
    if(role==1)
    {
      this.showFormAdd1=!this.showFormAdd1;
      this.showFormDelete1=false;
      this.showFormUpdate1=false;
      this.Role=role;
    }
    else if(role==2)
    {
      this.showFormAdd2=!this.showFormAdd2;
      this.showFormDelete2=false;
      this.showFormUpdate2=false;
      this.Role=role;
    }
    else if(role==3)
    {
      this.showFormAdd3=!this.showFormAdd3;
      this.showFormDelete3=false;
      this.showFormUpdate3=false;
      this.Role=role;
    }
    else if(role==4)
    {
      this.showFormAdd4=!this.showFormAdd4;
      this.showFormDelete4=false;
      this.showFormUpdate4=false;
      this.Role=role;
    }
  }
  getFormUp(role:number){

    //this.resetVar();
    if(role==1)
    {
      this.showFormAdd1=false
      this.showFormDelete1=false;
      this.showFormUpdate1=!this.showFormUpdate1;
    }
    else if(role==2)
    {
      this.showFormAdd2=false
      this.showFormDelete2=false;
      this.showFormUpdate2=!this.showFormUpdate2;
    }
    else if(role==3)
    {
      this.showFormAdd3=false
      this.showFormDelete3=false;
      this.showFormUpdate3=!this.showFormUpdate3;
    }
    else if(role==4)
    {
      this.showFormAdd1=false
      this.showFormDelete1=false;
      this.showFormUpdate4=!this.showFormUpdate4;
    }
  }
  getFormDe(role:number){
    //this.resetVar();
    if(role==1)
    {
      this.showFormAdd1=false;
      this.showFormDelete1=! this.showFormDelete1;
      this.showFormUpdate1=false;
    }
    else if(role==2)
    {
      this.showFormAdd2=false;
      this.showFormDelete2=! this.showFormDelete2;
      this.showFormUpdate2=false;
    }
    else if(role==3)
    {
      this.showFormAdd3=false;
      this.showFormDelete3=! this.showFormDelete3;
      this.showFormUpdate3=false;
    }
    else if(role==4)
    {
      this.showFormAdd4=false;
      this.showFormDelete4=! this.showFormDelete4;
      this.showFormUpdate4=false;
    }
  }
  postAddSchoolAdmin(){
    return this.httpc.post(this.URL_add_account,{
      'token':localStorage.token,
      'id':localStorage.id,
      'email':this.email_edit,
      'password':this.password_edit,
      'university':this.university_id,
      'Name':this.Name_edit,
      'Sex':this.Sex_edit,
      'BirthDate':this.BirthDate_edit,
      'Role':this.Role
    })
  }
  addSchoolAdmin(){
    this.postAddSchoolAdmin()
    .subscribe(temp=>{
      console.log(temp);
      window.alert('Thêm thành công');
      location.reload();
    })
    //this.resetVar();
  }
  postUpdateSchoolAdmin(){
    if(this.Name_edit!=""){
      this.Name=this.Name_edit;
    }
    if(this.Sex_edit!=""){
      this.Sex=this.Sex_edit;
    }
    if(this.BirthDate_edit!=""){
      this.BirthDate=this.BirthDate_edit;
    }
    // value is university id
    let httpHeaders = new HttpHeaders({
      'x-access-token': localStorage.token
    });
    //
    httpHeaders=httpHeaders.append("Access-Control-Allow-Origin", "*")
    httpHeaders=httpHeaders.append("Access-Control-Allow-Headers", "*");
    let options = {
      headers: httpHeaders,
    };
    return this.httpc.post(this.URL_up_account, {
      "id":localStorage.id,
      "User":
      {
        "email":this.email,
        "Name":this.Name,
        "Sex":this.Sex,
        "BirthDate":this.BirthDate,
        "university":this.university_id
      }
    }, options);
  }
  UpdateSchoolAdmin(){
    this.postUpdateSchoolAdmin()
    .subscribe(temp=>{
        console.log(temp);
    })
    //this.resetVar();
  }
  DeleteSchoolAdmin(){

  //   this.resetVar();
  }
  ngOnInit() {
  }
}
