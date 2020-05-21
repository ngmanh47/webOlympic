import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../User/Shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent implements OnInit {
  
  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(username, password){
    this.userService.login(username, password)
    .subscribe((data: any) => {
      localStorage.setItem('token', data['response']['token']); // get token from response
      localStorage.setItem('id', data['response']['ID']); // get ID from response
      console.log(data);

      this.router.navigate(['/admin']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
