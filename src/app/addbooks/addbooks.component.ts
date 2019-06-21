import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book } from '../defineclasses';
import { SelectedbookService } from '../selectedbook.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  addBookGroup;

  constructor(
    private formB: FormBuilder,
    private bookService: SelectedbookService
  ) {
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
      email: ['', [Validators.required, Validators.email]],
      postingpw: ['', [Validators.required, Validators.minLength(8)]],
      abstract: [''],
      status: ['']
    });
    // Validators.pattern('(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}')
  }

  ngOnInit() {}

  onSubmit() {
    this.addBookGroup.status = 'active';
    this.bookService.addItem(this.addBookGroup.value).subscribe(data => {
      console.log(data);
    });
    // console.log(this.addBookGroup.value);
  }
}
