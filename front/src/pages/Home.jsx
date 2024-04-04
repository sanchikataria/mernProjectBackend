import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://mernprojectbackend-1-9ko5.onrender.com/details')
      .then((response) => {
        setDetails(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 h-screen bg-gradient-to-br from-blue-500 to-purple-600'>
      
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 text-white'>Details List</h1>
        <Link to='/details/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) :  (
        <table className='w-full border-separate border-spacing-2 '>
      <thead className='bg-white bg-opacity-70'>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
          phone number
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
          email
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
          hobbies
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>

      <tbody className='bg-white bg-opacity-70'>
        {details.map((detail, index) => (
          <tr key={detail._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {detail.name}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {detail.phone_number}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {detail.email}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {detail.hobbies}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/details/details/${detail._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/details/edit/${detail._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/details/delete/${detail._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>


      </table>
      )}
    </div>
  );
};

export default Home;