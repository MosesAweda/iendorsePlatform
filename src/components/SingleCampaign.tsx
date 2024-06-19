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



const SingleCampaign = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <Navbar />






            <div className=" flex flex-col bg-gray-100 justify-center items-center  ">
                <div className="  p-4  max-w-md  border-gray-700 bg-white rounded-lg  my-5  ">

                    <div className='my-4     '>
                        <img src="/images/photo.png"></img>

                    </div>
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
                    <div className='p-1 mouse-pointer'>
                        <img src={danger} />
                    </div>

                    </div>

                    <div className='my-4'>
                        <h1 className='font-medium '>
                            Can Two Work Together Except They Agree
                        </h1>
                        <p className='flex my-2 text-customBlue font-medium  text-justify'>
                            <img src={link} />  <span className='px-1'>  www.powertothepeople.com </span></p>

                        <div className='text-justify my-2 pb-3'>
                         Join the movement for a brighter tomorrow with Jon Dee! As your senator,
                        Jon is dedicated to progress, unity, and positive change. Let's empower our community,
                        Join the movement for a brighter tomorrow with Jon Dee! As your senator. Let's empower our community,
                        Join the movement for a brighter tomorrow with Jon Dee! As your senator. Let's empower our community,
                        Join the movement for a brighter tomorrow with Jon Dee! As your senator. Let's empower our community,
                        <p className='text-justify text-xs py-2'>
                            18 June, 2024
                        </p>
                        </div>

                       
                    </div>

                    <div className='flex  mt-4 text-sm justify-between- mb-3'>
                        <div className='flex mr-5 items-center w-full'>
                            <button className='p-3 bg-customBlue text-white rounded-md w-full'> Share Campaign</button>
                        </div>

                        <div className='flex  items-center w-full'>
                            <button className='p-3 bg-customBlue text-white rounded-md w-full'> Endorse Campaign</button>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default SingleCampaign;
