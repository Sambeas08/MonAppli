import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemeComponent } from './probleme/probleme.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProblemeService } from './probleme/probleme.service';
import { HttpClientModule } from '@angular/common/http';
import { ProblemeData } from './probleme/probleme-data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmailMatcherComponent } from './shared/email-matcher/email-matcher.component';



@NgModule({
  declarations: [
    AppComponent,
    ProblemeComponent,
    AccueilComponent,
    EmailMatcherComponent
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule .forRoot(ProblemeData, { delay: 1000 })
    
  ],
  providers: [ProblemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
