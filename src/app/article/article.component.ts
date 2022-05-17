import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @Input()
  article !: Article;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  ngOnInit(): void {
  }

  delete(){
    this.deletedArticle.emit(this.article);
  }

}
