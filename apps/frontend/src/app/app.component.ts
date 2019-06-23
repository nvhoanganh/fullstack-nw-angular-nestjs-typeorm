import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { TicketDto } from '@fullstack/data';
import { GeneratedApiClient } from '@fullstack/api-client';

@Component({
  selector: 'fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tickets$: Observable<TicketDto[]>;

  constructor(private apisrv : GeneratedApiClient) {
    this.tickets$ = this.apisrv.ticketsAll();
  }
}
