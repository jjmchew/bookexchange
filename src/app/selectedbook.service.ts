// This service has 3 overall functions:
// 1) interact with the DB API to provide data from the DB
// 2) serve as the method to store and pass the "selected book" from the browsebook page/component and
// pass it to the modal component(s)
// 3) track whether the browsebooks page/component was the source of a modal call (fromBrowseBooks = true).
//  Modals are called to display listings from browsebooks and also as confirmations for added listings from addbooks

import { Injectable } from '@angular/core';
import { Book } from './defineclasses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedbookService {
  selectedBook: Book;
  fromBrowseBooks: boolean;

  // 2 URLs:  one for local test DB and another for hosted DB
  // apiUrl = 'http://localhost:3000/api/books';
  apiUrl = 'http://jjmchew.a2hosted.com/api/books';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // Get request to pull all active book listings from DB
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Get request to pull specific book listing (based on bookid) from DB
  getBookDetails(id): Observable<any> {
    return this.http.get(this.apiUrl + `/${id}`);
  }

  // Used to "remove" online posting - status other than "active" will not be displayed by browsebooks
  changeSelectedBookStatus(id): Observable<any> {
    return this.http.patch(this.apiUrl + `/${id}`, '');
  }

  // Used to add new listing to the DB from the addbooks component/page
  addItem(item): Observable<any> {
    return this.http.post<any>(
      this.apiUrl,
      JSON.stringify(item),
      this.httpOptions
    );
  }

  // Method to store the book selected from the browsebooks component TS and whether browsebooks as the source of a modal call
  getSelectedBook(x: Book, browseBooks: boolean) {
    this.selectedBook = x;
    this.fromBrowseBooks = browseBooks;
  }

  // Method to pass the book selected from the browsebooks component TS to another TS
  giveSelectedBook() {
    return this.selectedBook;
  }

  // Method to pass on whether browsebooks was the source of a modal call
  giveModalSource() {
    return this.fromBrowseBooks;
  }
}
