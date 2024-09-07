import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
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
}
