import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../menu-item";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'insert_chart',
      action: '/dashboard',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Sign In/Up',
      icon: 'login',
      action: '/dashboard',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Contact Us',
      icon: 'help',
      action: '/contact',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Raw Data',
      icon: 'notes',
      action: '/data',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];
}
