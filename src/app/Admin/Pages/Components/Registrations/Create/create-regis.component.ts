import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-regis',
  templateUrl: './create-regis.component.html',
})
export class CreateRegisComponent implements OnInit {
  heading = 'Create Regis';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  constructor() { }

  ngOnInit() {
  }

}
