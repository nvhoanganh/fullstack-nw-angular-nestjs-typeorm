import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { API_BASE_URL } from '@fullstack/api-client';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HttpClientModule
  ],
  providers: [{ provide: API_BASE_URL, useValue: environment.api_url }],
  bootstrap: [AppComponent]
})
export class AppModule {}
