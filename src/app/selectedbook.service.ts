import { Injectable } from '@angular/core';
import { Book } from './defineclasses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedbookService {
  selectedBook: Book;
  api_url = 'http://localhost:3000/api/books';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.api_url);
  }

  getSelectedBook(x: Book) {
    this.selectedBook = x;
  }

  giveSelectedBook() {
    return this.selectedBook;
  }
}
