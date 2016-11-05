import { Component } from '@angular/core';
import {NewsService} from './news.service'; 
import {News} from './News';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsService]

})
export class AppComponent {
  title = 'app works!';
}
