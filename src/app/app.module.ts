import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//Bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
//Spinner
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { IndexCostumersComponent } from './costumers/index-costumers/index-costumers.component';
import { AddCostumersComponent } from './costumers/add-costumers/add-costumers.component';
import { MessagesService } from './services/messages.service';
import { IndexPricesComponent } from './prices/index-prices/index-prices.component';
import { SelectCostumerComponent } from './select-costumer/select-costumer.component';
import { AddSuscriptionsComponent } from './suscriptions/add-suscriptions/add-suscriptions.component';
import { IndexSuscriptionsComponent } from './suscriptions/index-suscriptions/index-suscriptions.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    IndexCostumersComponent,
    AddCostumersComponent,
    IndexPricesComponent,
    SelectCostumerComponent,
    AddSuscriptionsComponent,
    IndexSuscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    
    NgxSpinnerModule
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
