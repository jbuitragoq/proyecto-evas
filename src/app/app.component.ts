import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';

  list = [
    { title: 'test', color: 'blue', imgUrl: ''},
    { title: 'test', color: 'green', imgUrl: ''},
    { title: 'test', color: 'red', imgUrl: ''},
    { title: 'test', color: 'blue', imgUrl: ''},
    { title: 'test', color: 'green', imgUrl: ''},
    { title: 'test', color: 'red', imgUrl: ''}
  ]
}
