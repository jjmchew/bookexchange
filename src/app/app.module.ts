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
import { BookDetailsComponent } from './book-details/book-details.component';
import { ModalbookdetailsComponent } from './modalbookdetails/modalbookdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalconfirmationComponent } from './modalconfirmation/modalconfirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowsebooksComponent,
    AddbooksComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    BookdetailsComponent,
    BookDetailsComponent,
    ModalbookdetailsComponent,
    ModalconfirmationComponent
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
  entryComponents: [ModalbookdetailsComponent, ModalconfirmationComponent]
})
export class AppModule {}
