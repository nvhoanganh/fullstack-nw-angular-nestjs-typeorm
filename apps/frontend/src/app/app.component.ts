import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { TicketDto, TicketType, TicketType3, GeneratedApiClient2 } from '@fullstack/data';
import { GeneratedApiClient } from './generated.service';

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
