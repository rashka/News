import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'; 
import {News} from '../News';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [NewsService]
})
export class ServiceComponent implements OnInit {
    public news; 
  constructor(private newsService: NewsService) {
     this.news = newsService.getNews();
   }

  ngOnInit() {
    console.info("On init excuted in ServiceComponent");
   
  }
  
}
