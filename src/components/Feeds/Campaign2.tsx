import React, { useState } from "react";
import { Link } from "react-router-dom";
import share from '../svg/share.svg';
import endorse from '../svg/endorse.svg';
import threeDots from '../svg/threeDots.svg'
import link from '../svg/link.svg'
import close from '../svg/close.svg';
import trash from '../svg/trash.svg';
import edit from '../svg/edit.svg';
import chart from '../svg/chart.svg'

const Campaign2 = ({item}: any) => {
  const [CampaignMenu, setCampaignMenu] = useState(false);

  const openCampaignMenu = () => {
    setCampaignMenu(true);
  };
  const closeCampaignMenu= () => {
    setCampaignMenu(false);
  };
 
 

  return (
    <>
     

      
        <div className="p-4 max-w-md border-gray-700 bg-white rounded-lg my-5" >
       
      
        <div className="flex items-center justify-between" >
            <div>
              <button className="bg-green-100 text-green-600 rounded-lg px-4 py-2 text-xs font-medium" > Points Left</button>
              </div>

          <div onClick={openCampaignMenu}> <img  src={threeDots} /></div>
          
      </div>

      <div className="my-4">
        <img src="/images/photo.png" alt="Campaign" />
      </div>

      <div className='my-4'>
        <h1 className='font-medium'>
       {item?.campaignTitle}  

        </h1>

        <p className='text-customBlue font-medium  my-3'>
          <img src={link}  className="inline mr-1 w-3 h-4" />
          www.powertothepeople.com
        </p>


        <p>
       {item?.description}
         </p>

         <p className="text-xs my-4 "> 11, July, 2023</p>

         <div>

          <div>
          <p className=" font-medium text-customBlue mb-2 mt-2  text-xs"> You tagged 3 Persons</p>
          </div>
              
    <div className="flex items-center -space-x-4">
    <img
        alt="user 5"
        src="images/searchPhoto1.png"
        className="relative inline-block h-12 w-12 rounded-full border-2 border-customBlue object-cover object-center hover:z-10 focus:z-10"
      />
    <img
        alt="user 5"
        src="images/searchPhoto1.png"
        className="relative inline-block h-12 w-12 rounded-full border-2 border-customBlue object-cover object-center hover:z-10 focus:z-10"
      />
      <img
        alt="user 5"
        src="images/searchPhoto1.png"
        className="relative inline-block h-12 w-12 rounded-full border-2  border-customBlue object-cover object-center hover:z-10 focus:z-10"
      />
    </div>



         </div>
   
      </div>

      <div className="flex mt-10 text-sm justify-between mb-3">
        <div className="flex mr-5 items-center w-full">
          <button className="p-3 bg-customBlue text-white rounded-md w-full">
            Share Campaign
          </button>
        </div>
        <div className="flex items-center w-full">
          <button className="p-3 bg-customBlue text-white rounded-md w-full"  >Endorse Campaign</button>
        </div>
      </div>
    </div>
  
       
       


        <div className={`fixed inset-0 transition-opacity ${CampaignMenu ? 'flex' : 'hidden'} items-center justify-center `}>
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <span
                className="absolute top-5   z-50  bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeCampaignMenu}
              >
              <img    src={close} alt="x"  width={40} height={40}/>
              </span>
      <div className="relative p-4 w-full max-w-md max-h-full">
  {/* Modal content */}
  <div className=" bg-white rounded-lg shadow flex items-center justify-center  pt-20 pb-44" >
 <div className="flex-col justify-center items-center p-6 border w-28  flex-initial bg-gray-100 rounded-md m-2 "> 
  <div className="flex justify-center ">
  <img src={chart} />
  </div>

 
  <div className="flex justify-center">
    <Link to = {"/Analytics"} > 
<p className="text-customBlue font-medium"> Analytics</p>
</Link>
  </div>
 </div>
    
     
 <div className="flex-col justify-center items-center  w-28  flex-initial p-6 border bg-gray-100 rounded-md m-2 "> 
  <div className="flex justify-center ">
  <img src={edit} />
  </div>
 <div className="flex justify-center">
<p className="text-green-500 font-medium"> Edit</p>
  </div>
 </div>
    

 <div className="flex-col justify-center items-center  w-28  flex-initial p-6 border bg-gray-100 rounded-md m-2 "> 
  <div className="flex justify-center ">
  <img src={trash} />
  </div>
 <div className="flex justify-center">
<p className="text-red-500 font-medium"> Delete </p>
  </div>
 </div>
 
  </div>
</div>

            
      </div>
    </>
  );
}

export default Campaign2;
