import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CampaignMenu from "./CampaignMenu";
import PromoteModal from "./PromoteModal";
import link from '../svg/link.svg';
import threeDots from '../svg/threeDots.svg';
import SubscriptionModal from "./SubscriptionModal";
import PurchaseUnitsModal from "./PurchaseUnitsModal";
import PaymentMethodModal from "./PaymentMethodModal";
import useFetch from "../Hooks/useFetch";
import { baseURL } from "../URL";
import InsufficientWalletBalanceModal from "./InsufficientWalletBallance";

const FeedCampaign = ({ item }: any) => {
  const [campaignMenuOpen, setCampaignMenuOpen] = useState(false);
  const [showPromoteModal, setShowPromoteModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showPurchaseUnitsModal, setPurchaseUnitsModal] = useState(false);
  const [paymentMethodModal, setPaymentMethodModal] = useState(false);
  const [insufficientWalletModal, setInsufficientWalletModal] = useState(false);
  const [promotionType, setPromotionType] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("");
  const [unitsToPurchase, setUnitsToPurchase] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  
  const [allData, setAllData] = useState<any>({});
  const onSuccess = () => {}
  const onError = () => {}
  const openCampaignMenu = () => setCampaignMenuOpen(true);
  const closeCampaignMenu = () => setCampaignMenuOpen(false);
  const openPromoteModal = () => setShowPromoteModal(true);
  const closePromoteModal = () => setShowPromoteModal(false);
  const openSubscriptionModal = () => setShowSubscriptionModal(true);
  const closeSubscriptionModal = () => setShowSubscriptionModal(false);
  const openPurchaseUnitsModal = () => setPurchaseUnitsModal(true);
  const closePurchaseUnitsModal = () => setPurchaseUnitsModal(false);
  const openPaymentMethodModal = () => setPaymentMethodModal(true);
  const closePaymentMethodModal = () => setPaymentMethodModal(false);
  const openInsufficientWalletModal = () => setInsufficientWalletModal(true);
  const closeInsufficientWalletModal = () => setInsufficientWalletModal(false);




const walletURL = `${baseURL}/Wallet/WalletProfile`
  const { data: WalletData, refreshApi: refreshWalletData, error: walletError, loading: WalletDataLoading
  } = useFetch(walletURL, "GET", onSuccess, onError);

 const walletBalance = WalletData?.walletBalance
 console.log(walletBalance, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<wallet b")


  const handleSelectPromotionType = (type: string) => {
    setPromotionType(type);   
    
  }

  const submitPromotionType = (promotionType: string) => {
    if(promotionType === "PurchaseUnits"){
      openPurchaseUnitsModal();
    } else if(promotionType === "Subscription"){
      openSubscriptionModal();
    }
    setAllData({...allData, promotionType: promotionType});
    closePromoteModal()
}

  const handleSubPlanSelect = (type: string) => {
    setSubscriptionPlan(type);  
    setAllData({...allData, subscriptionPlan: type});
   closeSubscriptionModal();
  }


  const submitUnitsToPurchase = (units:number) => {
    setUnitsToPurchase(units)
    setAllData({...allData, unitsToPurchase: units});
    closePurchaseUnitsModal();
    openPaymentMethodModal();
  }

  
  const submitPaymentMethod = (method: any) => {
    setAllData({...allData, paymentMethod: method});
    setPaymentMethod(method)
    closePaymentMethodModal(); 

  if(unitsToPurchase > walletBalance){
    setInsufficientWalletModal(true);
    toast.error('Insufficient wallet balance');
 
  } else {
    //opensummarymodal
  }

  }



 
useEffect(() => {
  if(allData.promotionType && allData.subscriptionPlan && allData.unitsToPurchase && allData.paymentMethod){
    toast.success('Campaign promoted successfully');
  }
  console.log(allData)
}, [allData])

  return (
    <>
      <div className="p-4 max-w-lg mx-1 border-gray-700 bg-white rounded-lg my-5">
      <div className="flex items-center justify-between">
          <div>
            <button className="bg-green-100 text-green-600 rounded-lg px-4 py-2 text-xs font-medium">
              Points Left
            </button>
          </div>
          <div onClick={openCampaignMenu}>
            <img src={threeDots} />
          </div>
        </div>

        <div className="my-4">
          <img src={item?.campaignFiles[0].filePath} alt="Campaign" />
        </div>

        <div className="my-4">
          <h1 className="font-medium">{item?.campaignTitle}</h1>
          <p className="text-customBlue font-medium my-3">
            <img src={link} className="inline mr-1 w-3 h-4" />
            www.powertothepeople.com
          </p>
          <p>{item?.description}</p>
          <p className="text-xs my-4">11, July, 2023</p>
          <div>
            <p className="font-medium text-customBlue mb-2 mt-2 text-xs">
              You tagged 3 Persons
            </p>
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
                className="relative inline-block h-12 w-12 rounded-full border-2 border-customBlue object-cover object-center hover:z-10 focus:z-10"
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
            <button
              className="p-3 bg-customBlue text-white rounded-md w-full"
              onClick={openPromoteModal}
            >
              Promote Campaign
            </button>
          </div>
        </div>
       
      </div>

      <CampaignMenu 
        isOpen={campaignMenuOpen} 
        onClose={closeCampaignMenu} 
      />

      <PromoteModal
        isOpen={showPromoteModal}
        onClose={closePromoteModal}
        onSubmit={submitPromotionType}
      />

    <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={closeSubscriptionModal}
        onSubmit={handleSubPlanSelect}
      />

    <PurchaseUnitsModal
        isOpen={showPurchaseUnitsModal}
        onClose={closePurchaseUnitsModal}
        onSubmit={submitUnitsToPurchase}
      />

<PaymentMethodModal
        isOpen={paymentMethodModal}
        onClose={closePaymentMethodModal}
        onSubmit={submitPaymentMethod}
      />

<InsufficientWalletBalanceModal
        isOpen={insufficientWalletModal}
        onClose={closeInsufficientWalletModal}
      />


    </>
  );
};

export default FeedCampaign;