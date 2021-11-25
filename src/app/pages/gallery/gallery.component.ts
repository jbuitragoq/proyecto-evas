import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public listImages = [
    { id: 1, image: 'gallery1.jpg' },
    { id: 2, image: 'gallery2.jpg' },
    { id: 3, image: 'gallery3.jpg' },
    { id: 4, image: 'gallery4.jpg' },
    { id: 5, image: 'gallery5.jpg' },
    { id: 6, image: 'gallery6.jpg' },
    { id: 7, image: 'gallery7.jpg' },
    { id: 8, image: 'gallery8.jpg' },
    { id: 9, image: 'gallery9.jpg' }
  ];

  constructor() { }

  ngOnInit(): void { }

}
