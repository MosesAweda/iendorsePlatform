import { useState } from 'react';
import { Link } from 'react-router-dom';
import upload from '../svg/upload.svg'


const Step1 = ({ nextStep, handleChange, formData }:any)  => {
    return (
        <> 
            <div className="flex bg-gray-100 justify-center text-xs ">
             <div className='bg-white p-5 rounded-lg max-w-md h-auto my-10'>
             <div className="flex items-center justify-center mb-5">
          <div className="flex-1 border-2    border-t border-customBlue"></div>
           
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
                <img src="./images/frame1.png" alt="frame1" className=' mx-auto'/>
                <form className="space-y-4 mt-4 " action="#" >
        <div>
          <select  
                name="CampaignCategory"
                onChange={handleChange('CampaignCategory')} value={formData.CampaignCategory}
                className="border border-gray-300 text-gray-700  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                 <option selected disabled> Campaign Category</option>
              <option> Option 2</option>

            </select>
        </div>



        <div>
          <input  
                    placeholder='Campaign Title'
                name="CampaignTitle"
                onChange={handleChange('CampaignTitle')} value={formData.CampaignTitle}
               
                className="border border-gray-300 text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
                 
        </div>

        <div>
          <input  
                    placeholder='Campaign Link'
                name="CampaignLink"
                onChange={handleChange('CampaignLink')} value={formData.CampaignLink}
          
                className=" border border-gray-300 text-gray-700  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
                 
        </div>

        <div>
          <input  
                    placeholder='Description'
                name="Description"
                onChange={handleChange('Description')} value={formData.Description}
                className=" border border-gray-300 text-gray-700   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
                 
        </div>


        <div>
          <select  
                name="People"
                onChange={handleChange('People')} value={formData.People}
                className=" border border-gray-300 text-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                 <option selected disabled> Tag People</option>
              <option> Option 2</option>

            </select>
        </div>
      
       
     
       
        <button
         
          className="w-full  text-white bg-customBlue hover:bg-blue-600  focus:ring-1 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center 
          "
        >  <img src={upload} alt="uplaod" className='inline-block mr-2'/>
       Uplaod Campaign Media
        </button>

        <p className='text-gray-700 text-xs pb-8'> You can upload a maxixum of 5 media files</p>







        <button
            onClick={nextStep}
          className="w-full  text-white bg-gray-400 hover:bg-blue-900 focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          "
        > 
            Next
        </button>
   
      </form>
             </div>
            </div>
        </>
    );
};

export default Step1;
