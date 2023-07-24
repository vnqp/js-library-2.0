let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function createBookPrototype(book) {
  const booksDiv = document.getElementById("books")

  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  let title = document.createElement("p");
  title.innerHTML = "Title: " + book.title;
  title.classList.add("title");
  bookDiv.appendChild(title);

  let author = document.createElement("p");
  author.innerHTML = "Author: " + book.author;
  author.classList.add("author");
  bookDiv.appendChild(author);

  let pages = document.createElement("p");
  pages.innerHTML = "Number of Pages: " + book.pages;
  pages.classList.add("pages");
  bookDiv.appendChild(pages);

  let status = document.createElement("p");
  status.innerHTML = "" + book.status;
  status.classList.add("book-status");
  bookDiv.appendChild(status);

  booksDiv.appendChild(bookDiv);
  return bookDiv;
}

function addBooksToPage() {
  myLibrary.forEach(createBookPrototype);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  
 const books = document.getElementById("books")
 books.innerHTML = "";

 addBooksToPage()
}



let theHobbit = new Book("The Hobbit", "J..R.R Tolkien", "295", "TO READ");
let aGameOfThrones = new Book("A Game of Thrones", "George R. R. Martin", "694", "READ");
addBookToLibrary(theHobbit);
addBookToLibrary(aGameOfThrones);