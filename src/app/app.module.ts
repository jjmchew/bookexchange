import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowsebooksComponent } from './browsebooks/browsebooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { ModalbookdetailsComponent } from './modalbookdetails/modalbookdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BrowsebooksComponent,
    AddbooksComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    BookdetailsComponent,
    ModalbookdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ModalbookdetailsComponent]
})
export class AppModule {}
