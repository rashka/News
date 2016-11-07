import { Component } from '@angular/core';
import {HttpModule} from '@angular/http';
import {NewsService} from './news.service'; 
import {News} from './News';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsService, HttpModule]

})
export class AppComponent {
  title = 'app works!';
}
