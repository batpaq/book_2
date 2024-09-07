package com.book.spring.springboot.book.dao;

import com.book.spring.springboot.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
