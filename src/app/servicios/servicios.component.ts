import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  paises;
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

 
  

  ngOnInit() {
    this.getdato();
  }

  private apiUrl = 'https://restcountries.eu/rest/v2/all';

  getdato(){
    this.http.get(this.apiUrl).subscribe(
      data1 => { this.paises = data1},
    )

  }

}
