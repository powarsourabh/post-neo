import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private apiurl = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private http: HttpClient) { }

getposts(): Observable <any[]>{
return this.http.get<any[]>(this.apiurl).pipe(tap (posts => console.log('fetched posts:', posts))
);

}


}
