import React, {useState, useEffect} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const EditBook = () => {
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5050/books/${id}`)
          .then(response => {
            setLoading(false);
            setTitle(response.data.data.title);
            setAuthor(response.data.data.author);
            setPublishYear(response.data.data.publishYear);
          })
          .catch(err => {
            alert('Book Not Found');
            setLoading(false);
            navigate('/');
          })
  }, [])

  const handleEditBook = () => {
    const data = {
      title:title,
      author:author,
      publishYear:publishYear
    }
    console.log(data);
    setLoading(true);
    axios.put(`http://localhost:5050/books/${id}`, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then(() => {
            setLoading(false);
            navigate('/');
          })
          .catch(err => {
            setLoading(false);
            console.log(err);
            navigate('/');
            alert('An Error Occured while updating the book');
          })

  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading? <Spinner />:''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-3'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            autoFocus
           />
        </div>
        <div className='my-3'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
           />
        </div>
        <div className='my-3'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
           />
        </div>
        <button className='p-2 bg-sky-300 m-8 hover:bg-transparent hover:border-2 border-sky-300' onClick={handleEditBook}>
          Update
        </button>
      </div>
    </div>
  )
}

export default EditBook;