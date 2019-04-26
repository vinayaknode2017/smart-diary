import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-left-menu',
  templateUrl: './dashboard-left-menu.component.html',
  styleUrls: ['./dashboard-left-menu.component.css']
})
export class DashboardLeftMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public OnMouseHover() {
    document.getElementById("myheader").style.marginLeft = "260px";
    document.getElementById("myfooter").style.marginLeft = "260px";
  }

  public OnMouseLeave() {
    console.log('right');
    document.getElementById("myheader").style.marginLeft = "0px";
    document.getElementById("myfooter").style.marginLeft = "0px";
  }
}
