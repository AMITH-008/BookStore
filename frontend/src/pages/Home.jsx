import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import {BsInfoCircle} from 'react-icons/bs'
import Tooltip from '../components/Tooltip';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5050/books')
          .then(response => {
            setBooks(response.data.data);
            setLoading(false);
          })
          .catch(err => {
            console.log(err);
            setLoading(false);
          });
  }, [])

  return (
    <div className='p-4'>
      <div className='flex flex-row justify-center items-center'>
        <button className='p-2 bg-sky-300 hover:bg-transparent border-2 hover:border-sky-300 rounded-lg mx-1' onClick={() => setType('table')}>
          Table
        </button>
        <button className='p-2 bg-sky-300 hover:bg-transparent border-2 hover:border-sky-300 rounded-lg mx-1' onClick={() => setType('card')}>
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {
        loading? (
          <Spinner />
        ): (
          type==='table'? <BooksTable books={books} /> : <BooksCard books={books}/>
        )
      }
    </div>
  )
}

export default Home