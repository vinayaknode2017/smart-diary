import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-left-menu',
  templateUrl: './dashboard-left-menu.component.html',
  styleUrls: ['./dashboard-left-menu.component.css']
})
export class DashboardLeftMenuComponent implements OnInit {

isLeftMenuPinned: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public OnMouseHover() {
    if(this.isLeftMenuPinned === false) {
      document.getElementById("myheader").style.marginLeft = "260px";
      document.getElementById("myfooter").style.marginLeft = "260px";
      document.getElementById("sidenav").style.marginLeft = "0";
    }
  }

  public OnMouseLeave() {
    if(this.isLeftMenuPinned === false) {
      document.getElementById("myheader").style.marginLeft = "0px";
      document.getElementById("myfooter").style.marginLeft = "0px";
      document.getElementById("sidenav").style.margin = "-260px";
    }
  }

  public OnToggleLeftMenuPin() {
    console.log(this.isLeftMenuPinned);
    if(this.isLeftMenuPinned === false) {
      this.isLeftMenuPinned = true;
      document.getElementById("myheader").style.marginLeft = "260px";
      document.getElementById("myfooter").style.marginLeft = "260px";
      document.getElementById("sidenav").style.margin = "0";
    }
    else {
      this.isLeftMenuPinned = false;
      document.getElementById("myheader").style.marginLeft = "0";
      document.getElementById("myfooter").style.marginLeft = "0";
      document.getElementById("sidenav").style.margin = "-260px";
    }
  }
}
