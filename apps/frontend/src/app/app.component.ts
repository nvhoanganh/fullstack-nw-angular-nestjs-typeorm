import { Component } from '@angular/core';

import { Observable } from 'rxjs';
// import { Country, Suburb } from '@fullstack/domain';
import { HttpClient } from '@angular/common/http';
import { CountryDto } from '@fullstack/data'
import { environment } from '../environments/environment';
@Component({
  selector: 'fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countries$: Observable<CountryDto[]>;

  constructor(private http: HttpClient) {
    console.log(`test`, 123);
    this.countries$ = this.http.get<CountryDto[]>(`${environment.api_url}countries`);
  }
}
