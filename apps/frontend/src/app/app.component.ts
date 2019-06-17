import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Ticket } from '@fullstack/data';

@Component({
  selector: 'fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tickets$: Observable<Ticket[]>;

  constructor(http: HttpClient) {
    this.tickets$ = http.get<Ticket[]>(environment.api_url + '/api/tickets');
  }
}
