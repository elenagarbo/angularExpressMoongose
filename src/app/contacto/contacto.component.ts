import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  datos:{}
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.saveBook();
  }

  saveBook() {
    this.http.post('/Datos', this.datos)
      .subscribe(res => {
          let id = res['_id'];
          // this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
