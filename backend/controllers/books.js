import Book from '../models/books.js';


//Add A New Book
export const addBook = async (request, response) => {
    const data = request.body;
    if(!data.author || !data.title || !data.publishYear) {
        response.status(400).json({error:"Please Fill All The Details"});
        return;
    }
    try{
        const createdBook = new Book(data);
        await createdBook.save();
        response.status(200).send("Book Added");
    }catch(error){
        response.status(500).send(error);
    }  
}

//Fetch All Books
export const getBooks = async (request, response) => {
    try{
        const allBooks = await Book.find();
        response.status(200).json({
            count:allBooks.length,
            data:allBooks
        });
    }catch(err){
        response.status(500).send(err);
    }
    
}

//Fetch a single Book
export const getBook = async (request, response) => {
    try{
        const {id} = request.params;
        const book = await Book.findById(id);
        response.status(200).json({
            data:book
        });
    }catch(err){
        response.status(500).send(err);
    }
    
}

//Update A Book
export const updateBook = async (request, response) => {
    try{
        const {id} = request.params;
        const  data = request.body;

        if(!data.author || !data.title || !data.publishYear) {
            response.status(400).json({error:"Please Fill All The Details"});
            return;
        }

        const updatedBook = await Book.findByIdAndUpdate(id, data);
        console.log(updatedBook);
        response.status(200).send(updatedBook);
    }catch(err){
        response.status(500).send(err);
    }
}

//Delete A Book
export const deleteBook = async (request, response) => {
    try{
        const {id} = request.params;
        await Book.findByIdAndDelete(id);
        response.status(200).send("Book Deleted");
    }catch(err){
        response.status(500).send(err);
    }
}