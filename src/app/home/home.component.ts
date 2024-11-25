import { Component, OnInit } from '@angular/core';
import { NAV_ITEMS } from '../constant/stringConstant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navItems = NAV_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
