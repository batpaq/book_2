import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  book: any = { id: null, name: '' };

  constructor(private bookService: BookService, private router: Router) { }

  createBook(): void {
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
