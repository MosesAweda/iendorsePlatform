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
import link from './svg/link.svg'
import danger from './svg/danger.svg'
import Navbar from './Navbar';
import Campaigns from './Campaigns';
import dot from './svg/dot.svg'



const Notifications = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <Navbar />

            <div className=" flex bg-gray-100 justify-center   h-screen">
                <div className='flex flex-col mt-10 mx-3'>
                <div className='flex  text-sm justify-between- mb-3 bg-white rounded-lg  py-3 px-10'>
                    <div className='flex mr-5 items-center w-full '>
                        <button className='px-6 py-2 bg-white  text-gray-800 rounded-md w-full'> Notifications</button>
                    </div>

                    <div className='flex  items-center w-full'>
                        <button className='px-6 py-2 bg-customBlue text-white rounded-md w-full'> Endorsements </button>
                    </div>
                </div>



              
                <div className="  p-4  max-w-md  border-gray-700 bg-white rounded-lg  my-2 ">

                    <div className="flex items-center justify-between">
                        <div className='flex'>
                            <div className="mr-4 bg-red-500 rounded-full mx-1 ">
                                <img src="/images/Avatar.png" width={45} height={45} alt="Avatar" className="" />
                            </div>
                            <div>
                                <div className=" font-semibold text-lg">
                                    Poster
                                </div>
                                <div className='text-xs'>
                                    <i> Titile</i>
                                </div>
                            </div>
                        </div>


                        <div className=' mouse-pointer'>
                            <img src={dot} />
                        </div>
                    </div>

                    <div className='my-2 pr-20'>
                        <h1 className='font-medium '>
                            Thnak you for your Endorsement
                        </h1>


                        <div className=' mt-2 '>
                            Campaign #4366728 was endorsed with 30 units by you.
                            <p className=' text-xs mt-10'>
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

export default Notifications;
