import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../Shared/user.service';
import { Router } from '@angular/router';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(username, password){
    this.userService.login(username, password)
    .subscribe((data: any) => {
      localStorage.setItem('token', data['response']['token']); // get token from response
      console.log(data);
      console.log(data['response']['token']);
     
      this.router.navigate(['/']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
