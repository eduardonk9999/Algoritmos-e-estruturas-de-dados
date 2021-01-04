/**
 * Objetos no JS são coleções de nome-valor, Há duas maneiras de criar um objeto
 * simple em JavaScript
 * 
*/

//1°
var obj = new Object();

//2°
var obj = {};

// ou
obj = {
  nome: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle arth'
};

/**
 * Em POO, um objeto é uma instância de uma classe.
 * 
*/
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function() {
    console.log(this.isbn);
  }
}

// Para instanciar essa classe:
var book = new Book('title', 'pag', 'isbn');

// Dai então podemos acessar as propriedades e atualizar elas da seguinte forma:
book.title = 'new title';