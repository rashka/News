import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';


import {News} from './News';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {
  public newsResourseUrl = 'http://localhost:8080/TimeManager/resources/users';
  public news;

  constructor(private http: Http) { 
    this.news = [
      { id:'1', firstName:'Abdul', lastName:'salad', username:'asala', password:'secret'},
      { id:'2', firstName:'Abdul2', lastName:'salad2', username:'asala2', password:'secret2'},
      { id:'3', firstName:'Abdu3', lastName:'salad3', username:'asala3', password:'secret3'},
    ];
  }
  
    // getNews() : Observable<News[]> {

    //      // ...using get request
    //      return this.http.get(this.newsResourseUrl)
    //                     // ...and calling .json() on the response to return data
    //                      .map((res:Response) => res.json())
    //                      //...errors if any
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    //  }
    getNews(){
      console.log("getting news ...")
     return this.news;

    }

    addNews(){
      console.log("adding News ...")
    }
}