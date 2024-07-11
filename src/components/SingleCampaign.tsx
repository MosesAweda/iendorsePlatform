import React, { useState } from "react";
import Navbar from "./Navbar";
import share from './svg/share.svg';
import endorse from './svg/endorse.svg';
import link from './svg/link.svg';
import copy from './svg/copy.svg';
import danger from './svg/danger.svg';
import x from './svg/x.svg';
import tiktok from './svg/tiktok.svg';
import facebook from './svg/facebook.svg';
import instagram from './svg/instagram.svg';
import close from './svg/close.svg';


const SingleCampaign = () => {
  const [sharemenuOpen, setShareMenuOpen] = useState(false);
  const [endorseMenu, setEndorseMenu] = useState(false);
  const [reportMenu, setReportMenu] = useState(false);

  const openShareMenu = () => {
    setShareMenuOpen(true);
  };

  const closeShareMenu = () => {
    setShareMenuOpen(false);
  };

  
  const openReportMenu = () => {
    setReportMenu(true);
  };

  const closeReportMenu = () => {
    setReportMenu(false);
  };
 

  const openEndorseMenu = () => {
    setEndorseMenu(true);
  };

  const closeEndorseMenu = () => {
    setEndorseMenu(false);
  };

  

  return (
    <>
      <Navbar />

      <div className="flex flex-col bg-gray-100 justify-center items-center">
        <div className="p-4 max-w-md border-gray-700 bg-white rounded-lg my-5 mx-3">
          <div className="my-4">
            <img src="/images/photo.png" alt="Campaign" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="mr-4 bg-red-500 rounded-full mx-1">
                <img src="/images/Avatar.png" width={45} height={45} alt="Avatar" />
              </div>
              <div>
                <div className="font-semibold text-lg">Poster</div>
                <div className="text-xs">
                  <i>Title</i>
                </div>
              </div>
            </div>
            <div className="p-1 cursor-pointer">
              <img src={danger} alt="Report" onClick={openReportMenu} />
            </div>
          </div>

          <div className="my-4">
            <h1 className="font-medium">Can Two Work Together Except They Agree</h1>
            <p className="flex my-2 text-customBlue font-medium text-justify">
              <img src={link} alt="Link" /> <span className="px-1">www.powertothepeople.com</span>
            </p>

            <div className="text-justify my-2 pb-3">
              Join the movement for a brighter tomorrow with Jon Dee! As your senator,
              Jon is dedicated to progress, unity, and positive change. Let's empower our community,
              Join the movement for a brighter tomorrow with Jon Dee! As your senator. Let's empower our community,
              Join the movement for a brighter tomorrow with Jon Dee! As your senator. Let's empower our community,
              <p className="text-justify text-xs py-2">18 June, 2024</p>
            </div>
          </div>

          <div className="flex mt-4 text-sm justify-between mb-3">
            <div className="flex mr-5 items-center w-full">
              <button className="p-3 bg-customBlue text-white rounded-md w-full" onClick={openShareMenu}>
                Share Campaign
              </button>
            </div>
            <div className="flex items-center w-full">
              <button className="p-3 bg-customBlue text-white rounded-md w-full" onClick={openEndorseMenu} >Endorse Campaign</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`fixed inset-0 transition-opacity ${sharemenuOpen ? 'flex' : 'hidden'} items-center justify-center`}>
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <span
              className="absolute top-40   z-50  bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeShareMenu}
            >
             <img    src={close} alt="x"  width={40} height={40}/>
            </span>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="relative bg-white rounded-lg shadow-xl sm:w-full sm:max-w-sm">
            
            <h1 className="my-7 font-bold text-center">Share Campaign</h1>
            <div className="flex justify-center my-5">
              <div>
                <img src={copy} alt="copy" className="mx-4" width={40} height={40} />
              </div>
              <div>
                <img src={instagram} alt="instagram" className="mx-4" width={40} height={40} />
              </div>
              <div>
                <img src={x} alt="x" className="mx-4" width={40} height={40} />
              </div>
              <div>
                <img src={facebook} alt="fb" className="mx-4" width={40} height={40} />
              </div>
              <div>
                <img src={tiktok} alt="tiktok" className="mx-4" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>


      
      {/* Endorese Campaign 2*/}
      <div className={`fixed inset-0 transition-opacity ${endorseMenu ? 'flex' : 'hidden'} items-center justify-center `}>
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <span
              className="absolute top-5   z-50  bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeEndorseMenu}
            >
             <img    src={close} alt="x"  width={40} height={40}/>
            </span>
      <div className="relative p-4 w-full max-w-md max-h-full">
  {/* Modal content */}
  <div className="relative bg-white rounded-lg shadow">
    
      {/* Modal body */}
    <div className="p-4 md:p-5">
      <h1 className="font-medium text-center py-4"> Endorse Campaign</h1>
      <form className="space-y-8" action="#">
        <div>

          <input
            type="number"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Number of Units"
           
          />
        </div>


        <div className="mb-10">  
      <textarea
         
        name="email"
        id="email"
        rows={6}
        className=" resize-none mb-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Leave an Endorse note"
       
      />
    </div>
       
        <button
          type="submit"
          className="w-full text-white bg-customBlue hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          "
        >
       Proceed
        </button>
   
      </form>
    </div>
  </div>
</div>

            
      </div>



            
      {/* Report   Campain*/}
      <div className={`fixed inset-0 transition-opacity ${reportMenu ? 'flex' : 'hidden'} items-center justify-center `}>
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <span
              className="absolute top-5   z-50  bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeEndorseMenu}
            >
             <img    src={close} alt="x"  width={40} height={40}/>
            </span>
      <div className="relative p-4 w-full max-w-md max-h-full">
  {/* Modal content */}
  <div className="relative bg-white rounded-lg shadow">
    
      {/* Report Campaign */}
    <div className="p-4 md:p-5">
      <h1 className="font-medium text-center py-4"> Endorse Campaign</h1>
      <form className="space-y-8" action="#">
        <div>

          <input
            type="number"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Number of Units"
           
          />
        </div>


        <div className="mb-10">  
      <textarea
         
        name="email"
        id="email"
        rows={6}
        className=" resize-none mb-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Leave an Endorse note"
       
      />
    </div>
       
        <button
          type="submit"
          className="w-full text-white bg-customBlue hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          "
        >
       Proceed
        </button>
   
      </form>
    </div>
  </div>
</div>

            
      </div>


      <div className={`fixed inset-0 transition-opacity ${reportMenu ? 'flex' : 'hidden'} items-center justify-center `}>
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <span
              className="absolute top-5   z-50  bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeReportMenu}
            >
             <img    src={close} alt="x"  width={40} height={40}/>
            </span>



      <div className="relative p-4 w-full max-w-md max-h-full">
  {/* Modal content */}
  <div className="relative bg-white rounded-lg shadow">
    
      {/* Report Campaign */}
    <div className="p-4 md:p-5">
      <h1 className="font-medium text-center py-4"> Report Campaign</h1>
      <form className="space-y-8" action="#">
        <div>

          <select
            
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >

              <option disabled> Complaint</option>
              <option> Option 1</option>
              <option> Option 2</option>

            </select>
        </div>


        <div className="mb-10">  
      <textarea
         
        name="email"
        id="email"
        rows={6}
        className=" resize-none mb-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Description"
       
      />
    </div>
       
        <button
          type="submit"
          className="w-full text-white bg-customBlue hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          "
        >
       Report
        </button>
   
      </form>
    </div>
  </div>
</div>

            
      </div>

    </>
  );
};

export default SingleCampaign;
