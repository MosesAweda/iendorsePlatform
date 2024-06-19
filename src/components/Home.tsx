import { useState } from 'react';
import bg from '../../public/images/bg.svg';
import bell from './svg/bell.svg';
import home from './svg/home.svg';
import search from './svg/search.svg';
import plus from './svg/plus.svg';
import feed from './svg/feed.svg';
import account from './svg/account.svg';
import share from './svg/share.svg';
import endorse from './svg/endorse.svg';
import Navbar from './Navbar';
import Campaigns from './Campaigns';
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
       <Navbar/>

      <div
        className="flex flex-col w-full h-screen"
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
          <div className="flex justify-center items-center p-4">
            <div className="mx-5 max-w-md">
            <div style={{ fontFamily: "Georgia" }} className="text-4xl font-bold mb-4">
          Discover, Endorse, Transform
        </div>

              <p className="text-sm md:text-base leading-relaxed">
                Dive into our platform to discover a world of impactful campaigns, each one a beacon of hope, a catalyst for transformation.
                With iEndorse, you have the power to endorse causes close to your heart, amplifying their reach and influence.
                Every endorsement is a vote for change, a commitment to shaping a better tomorrow for all.
              </p>
              <button className='p-3 bg-customBlue text-white rounded-md px-14 mt-8'> Create Campaign</button>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-wrap justify-center p-4 text-xs bg-gray-100">
  <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>All Campaigns</button></div>
  <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block' style={{
      backgroundImage: 'url(images/campaigns.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      boxSizing: 'border-box',
      backgroundPosition: 'center',
      overflow: 'visible',
  }}>Civic Engagements</button></div>
  <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Social Causes</button></div>
  <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Education</button></div>
  <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Art</button></div>
  <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Technology</button></div>
  <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Business</button></div>
  <div><button className='bg-customBlue text-white px-5 py-2 m-2 rounded-full inline-block'>Others</button></div>
</div>



 

<div className=" flex flex-col bg-gray-100 justify-center items-center  ">
   <Campaigns />
</div>


    </>
  );
};

export default Home;
