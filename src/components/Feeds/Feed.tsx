import React, { useEffect } from 'react';
import bg from '../../public/images/bg.svg';
import share from '../svg/share.svg';
import endorse from '../svg/endorse.svg';
import Navbar from '../Navbar';
import Campaign2 from './Campaign2';
import { Link } from 'react-router-dom';
import { baseURL } from '../URL';
import usePost from '../Hooks/usePost';
import { LineWave } from 'react-loader-spinner';
 

interface ApiResponse {
  data: any;
  loading: boolean;
  error: Error | null;
  postData: (body: any) => Promise<void>;
}


const Feed: React.FC = () => {
  const { data:ApiData, loading, error, postData } = usePost<ApiResponse>('http://iendorse.runasp.net/api/Campaign/MyFeed?Page=1&PageSize=10');

  useEffect(() => {
    postData({});
  }, []);

 
  return (
    <>  
      <div className='bg-gray-100 h-screen'>
        <Navbar/>
        <div className="flex flex-col bg-gray-100 justify-center items-center">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}

          {ApiData && ApiData?.data.map((item:any, index:any) => (
            <Campaign2 key={index} item={item} />
          ) )}
        </div>
      </div>
    </>
  );
};

export default Feed;
