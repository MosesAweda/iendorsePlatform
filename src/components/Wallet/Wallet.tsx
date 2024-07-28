import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import { baseURL } from '../URL';
import usePost from '../Hooks/usePost';
import useFetch from '../Hooks/useFetch';
import incoming from '../svg/incoming.svg'


const Wallet = () => {
    const onSuccess = () => {}
    const onError = () => {}
 
const walletURL = `${baseURL}/Wallet/WalletProfile`
const { data: WalletData, refreshApi: refreshWalletData, error: walletError, loading: WalletDataLoading
} = useFetch(walletURL, "GET", onSuccess, onError);
const walletBalance = WalletData?.walletBalance;

    return (
        <>
            <Navbar />

            <div className="flex bg-gray-100 justify-center h-screen">
                <div className=" mt-10 ">
                <div className="p-4 w-full md:max-w-md border-gray-700 bg-white rounded-lg my-2 bg-cover  bg-center overflow-hidden" style={{ backgroundImage: 'url(images/frame2.png)' }}>
                          
                            <div className="mt-3  pl-2 pr-10">
                                <h1 className="text-sm text-customBlue">
                                Wallet Ballance
                                </h1>
                            </div>

                            <div className="mt-2 pl-2 pr-10">
                                <h1 className="text-3xl font-bold text-customBlue">
                               {walletBalance}
                                </h1>
                            </div>  

                            <div className="mt-5 pl-2  ">
                            <button 
                                className="px-10 py-2  bg-customBlue hover:bg-gray-900 text-white rounded-md  "
                                
                            >
                            Fund Wallet
                            </button>
                            </div>  
                        </div>
                      <div className='font-medium text-lg'> Today</div>
               
                        <div className=" w-full md:max-w-md p-4 max-w-md border-gray-700 bg-white rounded-lg my-2">
                            <div className="flex items-center ">
                                <div className="flex">
                                    <div className="mr-4   rounded-full  mx-1">
                                        <img src={incoming}   width={50}   height={50}  alt="notification" className="" />
                                    </div>
                                    
                                </div>
                               
                            </div>
                            <div className="mt-2  pr-16">
                                <h1 className="font-medium">
                                Wallet Funded
                                </h1>
                                <div className="mt-2 text-sm">
                                You funded your wallet with 30 units(30,000 Naira).
                                </div>

                                <div className="mt-2 text-sm">
                                  Balance : <span className='font-medium'> 30,000 Points</span>
                                </div>

                                <div>
                                    <p className="text-xs mt-10">
                                        18 June, 2024
                                    </p>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Wallet;
