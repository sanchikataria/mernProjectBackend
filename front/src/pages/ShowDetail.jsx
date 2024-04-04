import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowDetail = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://mernprojectbackend-1-9ko5.onrender.com/details/${id}`)
      .then((response) => {
        setDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 h-screen bg-gradient-to-br from-blue-500 to-purple-600'>
      <BackButton />
      <h1 className='text-3xl my-4 text-white'>Show Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 bg-white bg-opacity-70'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{details._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{details.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>phone number</span>
            <span>{details.phone_number}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>email</span>
            <span>{details.email}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>hobbies</span>
            <span>{details.hobbies}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(details.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(details.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetail