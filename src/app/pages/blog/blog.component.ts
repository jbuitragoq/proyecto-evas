import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/article.model';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public listArticles: string[] = [];
  public listArticlesDetail: ArticleModel[] = [];

  constructor(private router: Router,
              private blogService: BlogService) {

    blogService.getArticles().subscribe(data => {
      this.listArticles = data;
    });

    blogService.getListArticles().subscribe(data => {
      this.listArticlesDetail = data;
    });
  }

  ngOnInit(): void { }

  detailArticle(id: number): void {
    this.router.navigateByUrl(`/blog/detail/${id}`);
  }
}
