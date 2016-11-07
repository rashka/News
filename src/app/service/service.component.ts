import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'; 
import {News} from '../News';
import {Post} from '../post';
import {User} from '../user';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [NewsService]
})
export class ServiceComponent  {
    private posts:Post[]; 
    private users:User[];
   // private body;

  constructor(private newsService: NewsService) {
     this.newsService.getUsers().subscribe(users =>{
     //  this.posts = posts;
     this.users = users;
     });
   }

  
  
}
