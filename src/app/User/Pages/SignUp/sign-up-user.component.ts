import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Shared/user.model';
import { UserService } from '../../Shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.css']
})
export class SignUpUserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private router: Router) { }
  isSignupError = false;
  ngOnInit() {
  }

  OnSubmit(email, password, name, birthday, sex, university){
    // var data = "username=" + userName +"&password=" + password;
    // var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    // return this.http.post(this.rootUrl + '/tolken', data, {header: reqHeader});

    // post
    this.userService.registerUser(email, password, name, birthday, sex, university)
      .subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/']);  
      },
      (err : HttpErrorResponse)=>{
        this.isSignupError = true;
      });
  }
}