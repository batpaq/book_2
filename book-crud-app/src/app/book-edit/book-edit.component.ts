import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: any = { id: null, name: '' };

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(): void {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
