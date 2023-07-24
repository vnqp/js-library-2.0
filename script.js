let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}


closeColumnBtn = document.getElementById("close-column-btn")
closeColumnBtn.onclick = function() {
    formSector = document.getElementById("add-book-sector");
    formSector.classList.add("hide");
};


const formSubmitBtn = document.getElementById("form-submit-btn")
formSubmitBtn.onclick = function(event) {
  let bookName = document.getElementById("book-title").value
  let bookAuthor = document.getElementById("book-author").value
  let bookPages = document.getElementById("book-pages").value
  let bookStatus = document.getElementById("book-status")
  if (bookStatus.checked) {
    bookStatus = "READ"
  } else {
    bookStatus = "TO READ"
  }

  addBookToLibrary(new Book(bookName, bookAuthor, bookPages, bookStatus));

  event.preventDefault();
}

function createBookPrototype(book) {
  const booksDiv = document.getElementById("books")

  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  let titleDiv = document.createElement("div");
  titleDiv.classList.add("title-card-area")

  let removeBook = document.createElement("button");
  removeBook.innerText = "X";
  removeBook.classList.add("remove-book-btn");
  removeBook.onclick = function () {
    myLibrary.pop(book)
    bookDiv.remove();
  }
  titleDiv.appendChild(removeBook)

  let title = document.createElement("p");
  title.innerHTML = book.title;
  title.classList.add("title");
  titleDiv.appendChild(title)
  bookDiv.appendChild(titleDiv);

  let author = document.createElement("p");
  author.innerHTML = "Author | " + book.author;
  author.classList.add("author");
  bookDiv.appendChild(author);

  let pages = document.createElement("p");
  pages.innerHTML = "Number of Pages | " + book.pages;
  pages.classList.add("pages");
  bookDiv.appendChild(pages);

  let status = document.createElement("button");
  status.innerText = "" + book.status;
  status.classList.add("book-status");
  status.onclick = function() {
    if (status.innerText === "READ") {
      status.innerText = "TO READ";
    } else {
      status.innerText = "READ";
    }
  }
  bookDiv.appendChild(status);


  booksDiv.appendChild(bookDiv);

  return bookDiv;
}



function addBooksToPage() {
  myLibrary.forEach(createBookPrototype);
}

function addBooksBtnToPage() {
  const books = document.getElementById("books")

  let addBtnDiv = document.createElement("div");
  addBtnDiv.setAttribute("id", "add-book-btn-area")
  let addBtn = document.createElement("button");
  addBtn.innerText = "+"
  addBtn.setAttribute("id", "add-book-btn");
  addBtn.classList.add("add-book-btn");

  addBtn.onclick = function(){
      formSector = document.getElementById("add-book-sector");
      formSector.classList.remove("hide");
  }
 
  addBtnDiv.appendChild(addBtn);
  books.appendChild(addBtnDiv);
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  const books = document.getElementById("books")
  books.innerHTML = "";

  addBooksToPage();
  addBooksBtnToPage();
}

let theHobbit = new Book("The Hobbit", "J..R.R Tolkien", "295", "TO READ");
let aGameOfThrones = new Book("A Game of Thrones", "George R. R. Martin", "694", "READ");
addBookToLibrary(theHobbit);
addBookToLibrary(aGameOfThrones);










