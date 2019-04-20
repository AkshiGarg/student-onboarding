import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      { label: 'Onboarding Form', path: '/student', index: 0 },
      { label: 'List Students', path: '/student/list', index: 1 }]
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
    this.activeLinkIndex =
      this.navLinks.indexOf(
        this.navLinks.find(tab => tab.path === this.router.url));
  });
}
}
