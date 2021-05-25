// function helpers
// check book from list
function checkIfBookExist(bookList = [], { author, title }) {
  let res = [];
  bookList.forEach((book) => {
    if (book.author === author && book.title === title && book.quantity > 0) {
      res.push(true);
    }
  });
  return res.includes(true) ? true : false;
}
// check reader from readersList
function checkIfReaderExist(readersList, readerId) {
  let res = [];
  readersList.forEach((r = {}) => {
    const { _, __, id } = r;
    if (id === readerId) {
      res.push(true);
    }
  });
  return res.includes(true) ? true : false;
}

/* Book  */
// Main class book
class Book {
  constructor(author, title) {
    this._author = author;
    this._title = title;
    this.isTheSameBook = function (book) {
      if (book.prototype === this.prototype) {
        return book.title === this.title && book.author === this.author
          ? true
          : false;
      } else {
        return false;
      }
    };

    this.toString = function () {
      return `${this.author} ${this.title}`;
    };
  }
  get author() {
    return this._author;
  }
  get title() {
    return this._title;
  }
}
class LibraryBookBase extends Book {
  constructor(author, title, quantity) {
    super(author, title);
    this._quantity = quantity;
    this._bookId = this.counter();
  }
  // we don't have access from outside
  counter() {
    LibraryBookBase._counter = (LibraryBookBase._counter || 0) + 1;
    return LibraryBookBase._counter;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(q) {
    if (q <= 0) {
      this._quantity = 0;
    } else {
      this._quantity = q;
    }
  }
}

class LibraryBook extends LibraryBookBase {
  constructor(...props) {
    super(...props);
    this.increaseQuantityBy = function (amount) {
      this.quantity += amount;
      return this.quantity;
    };
    this.decreaseQuantityBy = function (amount) {
      this.quantity -= amount;
      return this.quantity;
    };
  }
}
// let newLibBook = new LibraryBook('Michigan', 'Add words', 1);
// newLibBook.decreaseQuantityBy(1);
// newLibBook.decreaseQuantityBy(1);

class Reader {
  constructor(firstName, lastName, books = []) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._books = books;
    this._readerId = this.counter();
    this.toString = function () {
      return `Reader: ${this.firstName} ${this.lastName}`;
    };
    this.borrowBook = function (book, library) {
      if (
        checkIfBookExist(library, book) &&
        book.__proto__ === ReaderBook.prototype
      ) {
        // push to books list
        this.books = book;
        library.books.forEach((b) => {
          if (b.author === book.author && b.title === book.title) {
            // get 1 book from list
            b.decreaseQuantityBy(1);
          }
        });
      }
    };
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get books() {
    return this._books;
  }
  get readerId() {
    return this._readerId;
  }
  set books(book) {
    this._books.push(book);
    return this._books;
  }

  counter() {
    Reader._counter = (Reader._counter || 0) + 1;
    return Reader._counter;
  }
}

class Library {
  constructor(books = [], readers = []) {
    this._books = books;
    this._readers = readers;
    // check if we have book in library
    this.doHaveBook = function (book = {}) {
      // return true / false
      return checkIfBookExist(this.books, book);
    };
    this.addBook = function (book = {}) {
      if (checkIfBookExist(this.books, book)) {
        this.books.forEach((b) => {
          if (b.author === book.author && b.title === book.title) {
            b.increaseQuantityBy(1);
          }
        });
      } else {
        let libBook = new LibraryBook(book.author, book.title, 1);
        // push book to library
        this.books = libBook;
      }
    };

    this.checkReaderId = function (readerId) {
      let res = [];
      this.readers.forEach((reader) => {
        if (reader.readerId === readerId) {
          res.push(true);
        }
      });
      return res.includes(true) ? true : false;
    };
    this.lendBook = function (book, readerId) {
      if (
        checkIfBookExist(this.books, book) &&
        checkIfReaderExist(this.readers, readerId)
      ) {
        return this.books.find((b) => {
          let { author, title } = b;
          return author === book.author && title === book.title;
        });
      }
    };
  }
  get books() {
    return this._books;
  }
  get readers() {
    return this._readers;
  }
  set books(book = {}) {
    this._books.push(book);
  }
}

// books for reader1
let book1ForReader1 = new Book('Keke', 'Go go');
let book2ForReader1 = new Book('Loll', 'Come here');
let booksForReader1 = [book1ForReader1, book2ForReader1];
let reader1 = new Reader('Mike', 'Jordan', booksForReader1);
// console.log(reader1);

// reader 2 info
let book1ForReader2 = new Book('Reno', 'Piko');
let book2ForReader2 = new Book('Toto', 'Ju ju');
let booksForReader2 = [book1ForReader2, book2ForReader2];
let reader2 = new Reader('Pike', 'Trump', booksForReader2);
// console.log(reader2);

let readers = [reader1, reader2];
// Make library

//  inherited from Book
let avBook = new LibraryBook('Sherenc', 'Eka', 1);
let secBook = new LibraryBook('Av. Isahakyan', 'du', 1);
let books = [avBook, secBook];
// Library
let yerevanLib = new Library(books, readers);

yerevanLib.addBook(book1ForReader2);
yerevanLib.addBook(book1ForReader2);
console.log(yerevanLib);
// console.log(yerevanLib.doHaveBook(book1ForReader1));
// console.log(yerevanLib.lendBook(book1ForReader2, 2));
