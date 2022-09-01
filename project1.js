console.log("kumkum");
// store all the date to the local storage
// give abother column as an option to delete the book
// add a scroll bar to the view



//constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// display construtor
function Display(){
     console.log("adding to ui");
}


//  add method to display prototype
Display.prototype.add=function(book){
 console.log( " adding to ui ");
  let tableBody =document.getElementById('tableBody');
 let uiString=`<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            </tr>`;
            tableBody.innerHTML += uiString;

          }
          // implement the clear function

Display.prototype.clear= function(){
  let libraryForm = document.getElementById('libraryForm');
  libraryForm.reset()
}


// implement the validate function
Display.prototype.validate= function(book){
  if (book.name.length<2 ||book.author.length<2){
     return false;
  }
  else{
    return true;
  }

}
Display.prototype.show= function(type,displayMessage){
 let message =document.getElementById('message');
                          message.innerHTML = `<div class="alert-${type} alert-warning alert-dismissible fade show" role="alert">
                          <strong>message:</strong> ${displayMessage}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>`
          setTimeout(()=>{
            message.innerHTML=''
          },2000) ;             
}

//  add submit event listener to liraryForm 
 let libraryForm = document.getElementById('libraryForm');
 libraryForm.addEventListener('submit',libraryFormSubmit);

 function libraryFormSubmit(e){
    e.preventDefault();
    console.log('you have submitted library form');
    let name= document.getElementById('bookName').value;
    let author= document.getElementById('author').value;
    let type;
    // fiction programm

    let fiction= document.getElementById('fiction');
    let programming= document.getElementById('programming');
    let cooking = document.getElementById('cooking');
      if(fiction.checked){
        type=fiction.value;
      }
      else if(programming.checked){
        type = programming.value;
      }
      else if (cooking.checked){
        type=cooking.value;
      }

    let book= new Book(name,author,type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success',' your book has been successfull add')
    }
    else{
        display.show('error',' sorry you can not add this book')
    }

    e.preventDefault();
 }