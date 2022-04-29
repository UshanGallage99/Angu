import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isDisabled:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  enable(){
    this.isDisabled = false
 }

}
