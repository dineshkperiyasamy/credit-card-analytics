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
      action: '/login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'help',
      action: '/about',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Anaytics',
      icon: 'graphic_eq',
      action: '/analytics',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Raw Data',
      icon: 'notes',
      action: '/data',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
  ];
}
