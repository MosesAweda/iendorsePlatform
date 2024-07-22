import React, {useEffect, useState} from 'react';
import close from '../svg/close.svg';
import greenCheck from '../svg/greenCheck.svg'
import { toast } from 'react-toastify';
import CampaignMenu from './CampaignMenu';

interface PromotionSuccessfulModalProps  {
  isOpen: boolean;
  onClose: () => void;
  details :any
  
}

const PromotionSuccessfulModal: React.FC<PromotionSuccessfulModalProps> = ({ isOpen, onClose, details }) => {
console.log(details)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 transition-opacity flex items-center justify-center">
    <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
    <span
      className="absolute top-40 md:top-14 z-50 bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
      onClick={onClose}
    >
      <img src={close} alt="x" width={40} height={40} />
    </span>
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow">
        <div className="p-2 md:p-5">
          <h1 className="text-center font-bold">   Promotion Successful</h1>
          <div className="flex max-w-sm  justify-center  ">
              <img src={greenCheck} alt="insufficient" />  
          </div>

            <div className='text-xs mb-20'>
            <p> You promoted your campaign #{details.campaignId} with {details.unitsToPurchase} units and your campaign has been published. Thank you.</p>
            </div>
            <div className="flex mt-10 text-sm justify-between mb-3">
          <div className="flex mr-5 items-center w-full">
          <button
              onClick={() => onClose()}
              className="w-full text-white bg-customBlue hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
             Ok
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PromotionSuccessfulModal; ;