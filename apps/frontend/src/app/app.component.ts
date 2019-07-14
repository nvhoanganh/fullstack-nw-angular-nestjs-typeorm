import { Component } from '@angular/core';

import { Observable } from 'rxjs';
// import { Country, Suburb } from '@fullstack/domain';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countries$: Observable<any[]>;

  constructor(private http: HttpClient) {

    this.countries$ = this.http.get<any[]>(`api/countries`);
  }
}
