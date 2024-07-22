import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import dot from './svg/dot.svg';
import send from './svg/send.svg';
import bell from './svg/bell.svg'
import search from './svg/search.svg'
import arrow_left from './svg/arrow_left.svg'

const UserProfile = () => {

    const [isCampaigns, setIsCampaigns] = useState(true);

    const showCampaigns = () => {
        setIsCampaigns(true);
    };

    const showAccounts = () => {
        setIsCampaigns(false);
    };

   

    return (
        <div className='bg-gray-100 min-h-screen'>
            <Navbar />
  
    
                    <div className='flex justify-center mt-8 mb-10 mx-3'>
                    <div className="flex text-sm justify-center mb-3 bg-white rounded-lg py-2 px-10">
                        <div className="flex mr-5 items-center w-full">
                            <button 
                                className={`px-6 py-2 ${isCampaigns ? 'bg-customBlue text-white' : 'bg-white text-gray-800'} rounded-md w-full`} 
                                onClick={showCampaigns}
                            >
                                Campaigns 
                            </button>
                        </div>
                        <div className="flex items-center w-full">
                            <button 
                                className={`px-6 py-2 ${!isCampaigns ? 'bg-customBlue text-white' : 'bg-white text-gray-800'} rounded-md w-full`} 
                                onClick={showAccounts}
                            >
                                Accounts
                            </button>
                        </div>
                    </div>
                    </div>




{isCampaigns && (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-32">
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto1.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
           src="images/searchPhoto2.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto3.png"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto4.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto3.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto3.png"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto3.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto2.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto2.png"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto1.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto3.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="images/searchPhoto3.png"
          alt=""
        />
      </div>
    </div>
  </div>
)}



{!isCampaigns && (
    <div className='flex justify-center '>
    <div className='bg-white p-10 w-1/2 rounded-md mb-10 '>
    
    <div className="flex items-center justify-between my-8 mx-1">
                <div className="flex ">
                  <div className="mr-4  rounded-full mx-1">
                    <img src="/images/Avatar.png" width={45} height={45} alt="Avatar" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Poster</div>
                    <div className="text-xs">
                      <span>Human Right Activist</span>
                    </div>
                  </div>
                </div>
                <div className="p-1 cursor-pointer">
                  <img src={arrow_left} alt="Report"   />
                </div>
              </div>
    
              
    <div className="flex items-center justify-between my-8 mx-1">
                <div className="flex ">
                  <div className="mr-4   rounded-full mx-1">
                    <img src="/images/Avatar.png" width={45} height={45} alt="Avatar" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Poster</div>
                    <div className="text-xs">
                      <p>Human Right Activist</p>
                    </div>
                  </div>
                </div>
                <div className="p-1 cursor-pointer">
                  <img src={arrow_left} alt="Report"   />
                </div>
              </div>
    
              
    </div>
    </div> 
)}




 
        </div>
    );
};

export default UserProfile;
