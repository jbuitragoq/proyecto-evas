import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ArticleModel } from "src/app/models/article.model";

@Injectable({ providedIn: 'root' })
export class BlogService {

    private listArticles: string[] = [
        'Guía de colores',
        'Nuevos modelos 2022',
        'Guía para diseño de interiores',
        'Guía para diseño de exteriores'
    ]

    private listArticlesDetail: ArticleModel[] = [
        {
            id: 0,
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
            id: 1,
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

    getArticles(): Observable<string[]> {
        return of(this.listArticles);
    }

    getListArticles(): Observable<ArticleModel[]> {
        return of(this.listArticlesDetail);
    }

    getByIdArticle(id: number): Observable<ArticleModel> {
        const article = this.listArticlesDetail.find(x => x.id === id);
        return of(article || new ArticleModel());
    }
}