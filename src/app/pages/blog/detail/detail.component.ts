import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/article.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public article: ArticleModel = new ArticleModel();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private blogService: BlogService) {

    route.params.subscribe(data => {
      blogService.getByIdArticle(Number(data['{id}'])).subscribe(data => {
        this.article = data;
      });
    });
  }

  ngOnInit(): void { }

  goBack(): void {
    this.router.navigateByUrl(`/blog`);
  }
}
