/* Book  */

class Book {
  constructor(author, title) {
    this._author = author;
    this._title = title;
  }
  get author() {
    return this._author;
  }
  get title() {
    return this._title;
  }
  get toString() {
    return `${this.author} ${this.title}`;
    }
    get isTheSameBook(book) {
        if (book.prototype === this.prototype) {
            return book.title === this.title && book.author === this.author ? true : false;
        } else {
            return false;
        }
    }
}
class LibraryBookBase extends Book {
    constructor(...props, bookId) {
        super(...props)
        this._bookId = bookId;
    }
}