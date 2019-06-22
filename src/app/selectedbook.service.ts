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

  // NOTE different URL for hosted DB
  apiUrl = 'http://localhost:3000/api/books';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBookDetails(id): Observable<any> {
    return this.http.get(this.apiUrl + `/${id}`);
  }

  changeSelectedBookStatus(id): Observable<any> {
    return this.http.patch(this.apiUrl + `/${id}`, '');
  }

  addItem(item): Observable<any> {
    return this.http.post<any>(
      this.apiUrl,
      JSON.stringify(item),
      this.httpOptions
    );
  }

  getSelectedBook(x: Book, browseBooks: boolean) {
    this.selectedBook = x;
    this.fromBrowseBooks = browseBooks;
  }

  giveSelectedBook() {
    return this.selectedBook;
  }

  giveModalSource() {
    return this.fromBrowseBooks;
  }
}
