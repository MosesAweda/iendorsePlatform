import React, { useState } from 'react';
import close from '../svg/close.svg';
import Heart from '../svg/heart.svg';
import Check from '../svg/check.svg'
import Medal from '../svg/medal.svg'
import medalStar from "../svg/medalStar.svg"

interface SubscriptionModal {
  isOpen: boolean;  
  onClose: () => void;
  onSubmit: (x:any) => void;
}


const SubscriptionModal: React.FC<SubscriptionModal> = ({ isOpen, onClose,  onSubmit }) => {
    const [selectedPlan, setSelectedPlan] = useState("");
    const handleSelectPlan = (plan:any) => {
      setSelectedPlan(plan);
   
    };
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 transition-opacity flex items-center justify-center">
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <span
        className="absolute top-40 md:top-1 z-50 bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={onClose}
      >
        <img src={close} alt="x" width={40} height={40} />
      </span>
      <div className="relative p-4 w-full max-w-lg max-h-full">
      <div className="relative bg-white rounded-lg shadow">
        <div className="p-4 md:p-5">
          <h1 className="text-center font-bold">Promote Your Campaign</h1>
          <p className="p-1 text-sm text-center font-sans mb-4">
            Subscribe to a plan that best suits you to be able to share and get a wider reach for your campaign.
          </p>
          <div className="flex justify-center mb-2">
            <div className="grid grid-cols-2 my-2">
              <div
                className={`border rounded-lg mx-2 px-6 py-3 text-xs cursor-pointer ${selectedPlan === 'Basic' ? 'border-blue-500' : ''}`}
                onClick={() => handleSelectPlan('Basic')}
              >
                <img src={Heart} className='-ml-1' />
                <span className='text-blue-800 font-medium text-sm'> Basic </span>
                <p>
                  <span className="font-medium text-lg"> ₦ 20,000</span>
                  <span className="text-xs">/Month</span>
                </p>
                <div className='mt-2'>
                  <p> <img src={Check} className='inline' /> Good value </p>
                  <p> <img src={Check} className='inline' /> 100 social media shares </p>
                  <p> <img src={Check} className='inline' /> Get 10 free shares</p>
                </div>
              </div>
              <div
                className={`border rounded-lg mx-2 px-6 py-3 text-xs cursor-pointer ${selectedPlan === 'Standard' ? 'border-blue-500' : ''}`}
                onClick={() => handleSelectPlan('Standard')}
              >
                <img src={Medal} className='-ml-1' />
                <span className='text-blue-800 font-medium text-sm'> Standard </span>
                <p>
                  <span className="font-medium text-lg"> ₦ 20,000</span>
                  <span className="text-xs">/Month</span>
                </p>
                <div className='mt-2'>
                  <p> <img src={Check} className='inline' /> Good value </p>
                  <p> <img src={Check} className='inline' /> 100 social media shares </p>
                  <p> <img src={Check} className='inline' /> Get 10 free shares</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <div
              className={`border rounded-lg mx-2 px-6 py-3 text-xs cursor-pointer ${selectedPlan === 'Premium' ? 'border-blue-500' : ''}`}
              onClick={() => handleSelectPlan('Premium')}
            >
              <img src={medalStar} className='' />
              <span className='text-blue-800 font-medium text-sm'> Premium </span>
              <p>
                <span className="font-medium text-lg"> ₦ 20,000</span>
                <span className="text-xs">/Month</span>
              </p>
              <div className='mt-2'>
                <p> <img src={Check} className='inline' /> Good value </p>
                <p> <img src={Check} className='inline' /> 100 social media shares </p>
                <p> <img src={Check} className='inline' /> Get 10 free shares</p>
              </div>
            </div>
          </div>
          <button
          disabled={!selectedPlan}
            onClick={() => onSubmit(selectedPlan)}
            className={` ${!selectedPlan ? 'opacity-50 cursor-not-allowed ' : ''}  w-full text-white bg-customBlue hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
          >
            Done
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubscriptionModal;