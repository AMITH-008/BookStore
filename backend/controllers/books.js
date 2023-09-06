import Book from '../models/books.js';

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
