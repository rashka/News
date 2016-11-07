import { Injectable } from '@angular/core';
import {Http, HttpModule, Response, RequestOptions} from '@angular/http';
import {News} from './news';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Post} from './post';
import {User} from './user';

@Injectable()
export class NewsService {
  public url = "http://localhost:8080/TimeManager/resources/users";
  //public url = "https://jsonplaceholder.typicode.com/posts";
  // public news;

  constructor(private http: Http) { 
    // this.news = [
    //   { id:'1', firstName:'Abdul', lastName:'salad', username:'asala', password:'secret'},
    //   { id:'2', firstName:'Abdul2', lastName:'salad2', username:'asala2', password:'secret2'},
    //   { id:'3', firstName:'Abdu3', lastName:'salad3', username:'asala3', password:'secret3'},
    // ];
  }
  
    // getNews() : Observable<News[]> {

    //      // ...using get request
    //      return this.http.get(this.newsResourseUrl)
    //                     // ...and calling .json() on the response to return data
    //                      .map((res:Response) => res.json())
    //                      //...errors if any
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    //  }
    getUsers() : Observable<User[]>{
    //   console.log("getting news ...")
    //  return this.news;
      return this.http.get(this.url)
          .map(res => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error - may be not connecting to rest api'));
    }

    
}