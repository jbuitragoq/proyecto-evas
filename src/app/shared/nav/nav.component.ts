import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor() { }

  ngAfterViewInit(): void {
    this.scrollEvent();
  }

  scrollEvent(): void {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', function() {
      nav?.classList.toggle('static', window.scrollY > 137);
    });
  }

  scrollToStart(): void {
    window.scrollTo(0, 0)
  }

}
