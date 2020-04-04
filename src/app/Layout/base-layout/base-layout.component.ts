import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
})
export class BaseLayoutComponent implements OnInit {
  heading = 'Dashboard';
  subheading = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  constructor() { }

  ngOnInit() {
  }

}
