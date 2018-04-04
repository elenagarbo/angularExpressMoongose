import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
articles: any;
// httpclient peticiones get ,post, put delete
constructor(private http: HttpClient) {}

//cuando se arranque angular de forma automatica...llevame a /book
//suscribe es meteme en books los datos
ngOnInit() {
this.http.get('/articulos').subscribe(data => {
  this.articles = data; 
});
}
}
