class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        state = 100;
        type = null;
    }
    fix() {
        this.state *= 1.5;
    }
   
    set state(newState) {
        if (newState < 0) {
            this.state = 0;
        } else if (newState > 100) {
            this.state = 100;
        } else {
            this.state = newState;
        }
    }
    getState() {
        return this.state;
    }
}
class Magazines extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        state === 100;
        type === 'magazine';
    }
}

class Book extends  PrintEditionItem {
        constructor(name, releaseDate, pagesCount, author) {
            super(name, releaseDate, pagesCount);
            this.author = author;
            state === 100;
            type === 'book';
        }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = 'fantastic';
    }
  }

  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = 'detective';
    }
  }

class Library (name, books) {
  constructor (name) {
    this.name = name;
    books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }
  
  giveBookByName(bookName) {
    const book = this.findBookBy('name', bookName);
    if (book) {
      this.books.splice(this.books.indexOf(book), 1);
      return book;
    } else {
      return null;
    }
  }
}
