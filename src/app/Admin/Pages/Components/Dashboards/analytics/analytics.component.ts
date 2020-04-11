import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {
  heading = 'Thống kê';
  subheading = 'Chi tiết thống kê';
  constructor() { }

  ngOnInit() {
  }

}
