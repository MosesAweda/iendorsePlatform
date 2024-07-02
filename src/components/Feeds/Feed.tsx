import { useState } from 'react';
import bg from '../../public/images/bg.svg';
import share from '../svg/share.svg';
import endorse from '../svg/endorse.svg';
import Navbar from '../Navbar';
import Campaigns2 from './Campaigns2';
import { Link } from 'react-router-dom';
const Feed = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>  
    <div className='bg-gray-100 h-screen'>
       <Navbar/>


<div className=" flex flex-col bg-gray-100 justify-center items-center  ">
   <Campaigns2  />
</div>
</div>

    </>
  );
};

export default Feed;
