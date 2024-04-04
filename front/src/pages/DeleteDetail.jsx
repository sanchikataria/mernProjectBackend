import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

//import { useSnackbar } from 'notistack';

const DeleteDetail = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
 // const { enqueueSnackbar } = useSnackbar();

  const handleDeleteDetail = () => {
    setLoading(true);
    axios
      .delete(`https://mernprojectbackend-1-9ko5.onrender.com/details/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);

        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div className='p-4 h-screen bg-gradient-to-br from-blue-500 to-purple-600'>
      <BackButton />
      <h1 className='text-3xl my-4 text-white'>Delete </h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto bg-white bg-opacity-70'>
        <h3 className='text-2xl'>Are You Sure You want to delete this?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteDetail}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteDetail;