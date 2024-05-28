class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        state === 100;
        type === null;
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

class Magazines extends class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        state === 100;
        type === 'magazine';
    }
}
, 
class Book extends class PrintEditionItem {
        constructor(name, releaseDate, pagesCount, author) {
            super(name, releaseDate, pagesCount);
            this.author = author;
            state === 100;
            type === 'book';
        }
}
,
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = 'novel';
    }
}
,
class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = 'fantastic';
    }
  }
,
  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount, author);
      this.type = 'detective';
    }
  }
