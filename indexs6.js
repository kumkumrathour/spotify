console.log("project 2")
// prototype
class Book{
    constructor(name, author, type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
// display constructor -> in this we are add some method in it so 
//  that it will display on screen
class Display{
  add(book){
    console.log( " adding to ui ");
     // populateing the element
    let tableBody =document.getElementById('tableBody');
              let uiString=`<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            </tr>`;
            tableBody.innerHTML += uiString;
          }
              //  all the field formspace will be clean and reset 
              // implementing the clear function
          clear(){
            let libraryForm = document.getElementById('libraryForm');
            libraryForm.reset()
          }
             //implementing the validate function
          validate(book){
            if (book.name.length<2 ||book.author.length<2){
               return false;
            }
            else{
              return true;
            }
          
          }
          // showm function implementation
          show(type,displayMessage){
            let message =document.getElementById('message');
            let boldText;
            if(type=='success'){
                boldText='success';
            }
            else{
                boldText='error';
            }
           
        message.innerHTML = `<div class="alert-${type} alert-warning alert-dismissible fade show" role="alert">
                                     <strong>${boldText}</strong> ${displayMessage}
                                     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                       <span aria-hidden="true">&times;</span>
                                     </button>
                                   </div>`
                     setTimeout(()=>{
                       message.innerHTML=''
                     },5000) ;             
           }
        }
        // add sumit event listner to libraryform

        let libraryForm = document.getElementById('libraryForm');
        libraryForm.addEventListener('submit',libraryFormSubmit);
        // making libraryformsubmit function
        function libraryFormSubmit(e){
            e.preventDefault();                //default behaviour of form when we summit an form it will reload so by this we prevent from default behaviour

            // now we are telling the browser what is name other and type so that it can make a new

            let name= document.getElementById('bookName').value;
            let author= document.getElementById('author').value;
            let type;
            // fiction programm
        
            let fiction= document.getElementById('fiction');
            let programming= document.getElementById('programming');
            let cooking = document.getElementById('cooking');
            // console.log(cooking.checked);
                // this will check weather you have checked or not any book
              if(fiction.checked){
                type=fiction.value;
              }
              else if(programming.checked){
                type = programming.value;
              }
              else if (cooking.checked){
                type=cooking.value;
              }
                //  making  object inside console with insert value when form is submit
            let book= new Book(name,author,type);
            console.log(book);


            //  we make display object to display all the value inside webside 
            let display = new Display();
            if(display.validate(book)){
              // we are adding method into the display to add display into the DOM
            display.add(book);
            // console.log(display.add);
            display.clear();
            display.show('success',' your book has been successfull add')
            }
            else{
                display.show('error',' sorry you can not add this book')
            }
        
            e.preventDefault();
         }

