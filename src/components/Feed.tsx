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
import Navbar from './Navbar';
import Campaigns from './Campaigns';
import { Link } from 'react-router-dom';
const Feed = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
       <Navbar/>


<div className=" flex flex-col bg-gray-100 justify-center items-center  ">
   <Campaigns  />
</div>


    </>
  );
};

export default Feed;
