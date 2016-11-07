import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'; 
import {News} from '../News';
import {Post} from '../post';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [NewsService]
})
export class ServiceComponent  {
    private posts:Post[]; 
  //  private title;
   // private body;

  constructor(private newsService: NewsService) {
     this.newsService.getPosts().subscribe(posts =>{
       this.posts = posts;
     });
   }

  
  
}
