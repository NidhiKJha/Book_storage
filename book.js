class Book {
    constructor(title,author,pages,description){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.currentPage = 1;
        this.read = false; 
       }
    readBook(pageNumber){
        if (pageNumber < 1 || pageNumber > this.pages) {
                console.log('Warning the numeber:' + pageNumber + 'is Invalid');
        }   
        else if(this.currentPage == this.pages){
            
             read = true; 
             console.log("book has been read");
             }
        else{
        
            this.currentPage = pageNumber;
        }
            
    } 
}