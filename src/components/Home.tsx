import { useState, useEffect } from 'react';
import bg from '../../public/images/bg.svg';
import bell from './svg/bell.svg';
import home from './svg/home.svg';
import search from './svg/search.svg';
import plus from './svg/plus.svg';
import feed from './svg/feed.svg';
import account from './svg/account.svg';
import share from './svg/share.svg';
import endorse from './svg/endorse.svg';
import Navbar from './NavBar/Navbar';
import GuestNavbar from './NavBar/GuestNavBar';
import HomeCampaign from './HomeCampaign';
import { Link } from 'react-router-dom';
import apple from './svg/apple.svg';
import playstore from './svg/playstore.svg'
import usePost from './Hooks/usePost';
import { baseURL } from './URL';
import { ThreeCircles } from 'react-loader-spinner';
 

interface ApiResponse {
  data: any;
  loading: boolean;
  error: Error | null;
  postData: (body: any) => Promise<void>;
}

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let discoverURL = `${baseURL}/Campaign/DiscoverCampaign?pageNumber=1&pageSize=100`;
  const { data:ApiData, loading, error, postData } = usePost<ApiResponse>(discoverURL);

  useEffect(() => {
    postData({});
  }, []);

  return (
    <>
    <Navbar/>

      <div
        className="hiddenflex flex-col w-full h-screen"
        style={{
          backgroundImage: 'url(images/hero.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          overflow: 'visible',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4 p-4">
          <div className="flex justify-center items-center p-2  ">
            <div className="mx-3 max-w-md  [">
              <div style={{ fontFamily: "Georgia" }} className="text-4xl font-bold mb-4">
                Discover, Endorse, Transform
              </div>

              <p className="text-sm md:text-base leading-relaxed">
                Dive into our platform to discover a world of impactful campaigns, each one a beacon of hope, a catalyst for transformation.
                With iEndorse, you have the power to endorse causes close to your heart, amplifying their reach and influence.
                Every endorsement is a vote for change, a commitment to shaping a better tomorrow for all.
              </p>
              
              <div className='flex '>
                <div className='mr-4'>
              <Link to={'/'}>
              <button className='p-1 bg-customBlue text-white rounded-lg px-5 mt-8'>
                  <div className='flex  '>
                    <div className=' flex items-center mr-1'> <img  width={20} height={20}  src={apple} />
                    </div>
                    <div className=''>
                      <div  style={{fontSize:"10px", marginBottom:"-4px" }}  className='text-gray-50 text-xs' >
                        Download on the 
                      </div>
                      <div   style={{ fontSize: "16  px " }}   className=' flex'>
                       App Store
                      </div>
                    </div>

                  </div>
              
                </button>
              </Link>
              </div>
              <div> 
              <Link to={'/'}>
              <button className='p-1 bg-customBlue text-white rounded-lg px-5 mt-8'>
                  <div className='flex  '>
                    <div className=' flex items-center mr-2'> <img  width={20} height={20}  src={playstore} />
                    </div>
                    <div className=''>
                      <div  style={{fontSize:"10px", marginBottom:"-4px" }}  className='flex justify-start  text-gray-50 text-xs' >
                      Get it on
                      </div>
                      <div   style={{ fontSize: "16  px " }}   className=' flex'>
                      Google Play
                      </div>
                    </div>

                  </div>
              
                </button>

              </Link>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>


  


      <div className="flex flex-wrap justify-center p-4 text-xs bg-gray-100">
        <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>All Campaigns</button></div>
        <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Civic Engagements</button></div>
        <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Social Causes</button></div>
        <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Education</button></div>
        <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Art</button></div>
        <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Technology</button></div>
        <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Business</button></div>
        <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Others</button></div>
      </div>




      <div className="flex flex-col bg-gray-100 justify-center items-center">
      {error && <p>Error: {error.message}</p>}

      {loading && ( <div className='flex items-center justify-center h-screen'>  <ThreeCircles
              visible={true}
              height="40"
              width="40"
              color="#0D236E"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
              </div>
              )}


            {ApiData && ApiData?.data.map((item:any, index:any) => (
                <HomeCampaign key={index} item={item} />
            ) )}
      </div>
    </>
  );
};

export default Home;
