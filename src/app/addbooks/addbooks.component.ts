import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book } from '../defineclasses';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  addBookGroup;
  enteredBook: Book;

  constructor(private formB: FormBuilder) {
    this.addBookGroup = this.formB.group({
      title: ['', [Validators.required]],
      author: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z-]*[ ]+[a-zA-Z-]')]
      ],
      publishdate: [
        '',
        [Validators.required, Validators.pattern('[1-9][0-9][0-9][0-9]')]
      ],
      category: ['', [Validators.required]],
      coversrc: [''],
      contact: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '[1-9][0-9][0-9][-|.| ][1-9][0-9][0-9][-|.| ][0-9][0-9][0-9][0-9]'
          )
        ]
      ],
      email: ['', [Validators.required, Validators.email]]
    });
    // Validators.pattern('(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}')
  }

  ngOnInit() {}

  onSubmit() {
    this.enteredBook = this.addBookGroup;
    console.log(this.enteredBook);
  }
}
