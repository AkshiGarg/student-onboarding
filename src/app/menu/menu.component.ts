import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor() {
    this.navLinks = [
      { label: 'Onboarding Form', path: '/student', index: 0 },
      { label: 'List Students', path: '/student/list', index: 1 }]
  }

  ngOnInit() {
  
  }

}
