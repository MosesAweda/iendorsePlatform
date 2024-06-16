import React from "react";
import { useState } from 'react';
import share from './svg/share.svg';
import endorse from './svg/endorse.svg';

const Campaigns = () => {

    return (
        <>
            <div className="  p-4  max-w-md  border-gray-700 bg-white rounded-lg  my-5 ">
                <div className="">
                    <div className="flex items-center">
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
                </div>
                <div className='my-4'>
                    <h1 className='font-medium '>
                        Can Two Work Together Except They Agree
                    </h1>
                    Join the movement for a brighter tomorrow with Jon Dee! As your senator,
                    Jon is Join the movement for a brighter tomorrow with Jon Dee! As your
                    senator, Jon
                </div>
                <div>
                    <img src="/images/photo.png"></img>

                </div>
                <div className='flex  mt-4 text-sm'>
                    <div className='flex mr-5 items-center'>
                        <div>
                            <img src={share} width={20} height={20} className='mr-1' />
                        </div>
                        <div>Share</div>
                    </div>

                    <div className='flex  items-center'>
                        <div>
                            <img src={endorse} width={20} height={20} className='mr-1' />
                        </div>
                        <div>Endorse</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Campaigns

