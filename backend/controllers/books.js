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

