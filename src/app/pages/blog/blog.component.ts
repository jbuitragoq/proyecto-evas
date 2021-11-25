import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/article.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public otherArticles = [
    'Guía de colores',
    'Nuevos modelos 2022',
    'Guía para diseño de interiores',
    'Guía para diseño de exteriores'
  ];

  public listArticles: ArticleModel[] = [
    {
      title: 'Guía de colores',
      image: 'us.jpg',
      imageTitle: 'Imagen Nosotros',
      date: '22 de Octubre de 2020',
      author: 'Tienda de Muebles',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam est iure minus neque ab doloribus, ducimus explicabo. Non provident accusamus dolor deleniti quo. Consequuntur ratione quo laborum eaque error.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure culpa maiores in cumque, obcaecati perspiciatis itaque. Labore eaque vitae similique assumenda odio voluptates quidem maiores natus, tenetur quo nam quaerat!'
      ]
    },
    {
      title: 'Nuevos modelos 2022',
      image: 'us.jpg',
      imageTitle: 'Imagen Nosotros',
      date: '18 de Octubre de 2020',
      author: 'Tienda de Muebles',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam est iure minus neque ab doloribus, ducimus explicabo. Non provident accusamus dolor deleniti quo. Consequuntur ratione quo laborum eaque error.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure culpa maiores in cumque, obcaecati perspiciatis itaque. Labore eaque vitae similique assumenda odio voluptates quidem maiores natus, tenetur quo nam quaerat!',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut, tenetur ad labore, ab officia alias sunt sit nisi doloremque, non nihil qui. Error numquam libero quod, dolorum tempora impedit?'
      ]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  detailArticle(): void {
    this.router.navigateByUrl('/blog/detail');
  }
}
