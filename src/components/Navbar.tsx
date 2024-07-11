import React, { useState, useEffect , useRef} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from '../../public/images/bg.svg';
import bell from './svg/bell.svg';
import home from './svg/home.svg';
import search from './svg/search.svg';
import plus from './svg/plus.svg';
import feed from './svg/feed.svg';
import account from './svg/account.svg';
import close from './svg/close.svg'
import editPen from './svg/editPen.svg'
import profile from './svg/profile.svg';
import money from './svg/money.svg'
import deleteAccount from './svg/deleteAccount.svg';
import wallet from './svg/wallet.svg';
import battery from './svg/battery.svg';
import support from './svg/support.svg';
import GuestNavbar from "./GuestNavBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const userData:any = window.localStorage.getItem("userData");
  const token = window.localStorage.getItem("token");
  const userName = userData ? JSON.parse(userData).fullName : null;
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);



  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setIsAuthenticated(false);
    navigate("/SignIn");
    toast.success("Logged out successfully");
  };


  useEffect(() => {
 
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))  {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  


  return (
    <>

 
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="images/logo.png" className="h-12 md:ml-10" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className=" relative" >
        <div ref={dropdownRef} className=" inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md   px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  "
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {userName}
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>

    {dropdownOpen && (
      <div ref={dropdownRef}  className="origin-top-right absolute right-0  w-42 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <button
            type="button"
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      </div>
    )}
    </div>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${menuOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={home} className="h-5 mr-2" /> Home
                </span>
              </a>
            </li>
            <li>
              <a
                href="/Search"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={search} className="h-5 mr-2" /> Search
                </span>
              </a>
            </li>
           
        { isAuthenticated ? (

            <>
            <li>
              <a
                href="/CreateCampaign"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={plus} className="h-5 mr-2" /> Create Campaign
                </span>
              </a>
            </li>
            <li>
              <a
                href="/Feed"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={feed} className="h-5 mr-2" /> My Feed
                </span>
              </a>
            </li>
            <li> 
              <a
               onClick={toggleSidebar}
                href="#"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={account} className="h-5 mr-2" /> My Account
                </span>
              </a>
            </li>
            <li>
              <a
                href="/Notifications"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={bell} className="h-5 mr-2" /> Notification
                </span>
              </a>
            </li></>

        ):(

          <>
               <li>
              <a
                href="#"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={plus} className="h-5 mr-2" /> Create Campaign
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={feed} className="h-5 mr-2" /> My Feed
                </span>
              </a>
            </li>
            <li> 
              <a
               
                href="#"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={account} className="h-5 mr-2" /> My Account
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-xs rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                <span className="flex items-center">
                  <img src={bell} className="h-5 mr-2" /> Notification
                </span>
              </a>
            </li></>
        ) 
        }   
       


          </ul>
        </div>
      </div>
    </nav>


    <div
        className={`fixed z-20  inset-0 bg-black bg-opacity-50 transition-opacity duration-[2000ms]ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      >
        {/* Close Button */}
        <span
          className={`fixed top-1/2 transform -translate-y-1/2 p-2   text-white rounded transition-transform duration-[2000ms] ease-in-out ${isOpen ? 'right-80 translate-x-0' : 'right-0 translate-x-full'}`}
          onClick={toggleSidebar}
        >
           <img    src={close} alt="x"  width={40} height={40}/>
        </span>
      </div>

      {/* Sidebar */}
      <div className={`fixed  z-40 top-0 right-0 h-full bg-white text-CustomBlue w-80 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
      transition-transform duration-[2000ms] ease-in-out`}>
        <div className=" flex flex-col justify-center items-center ">

        <div className="relative inline-block mt-10">
              <img
                className="rounded-full border-2 border-white"
                style={{
                  boxShadow: '0 0 0 1px #0D236E'
                }}
                src="/images/Avatar.png"
                width={45}
                height={45}
                alt="Avatar"
              />
              <img 
                width={70}
                height={70}
                src={editPen}  
                className="  absolute top-[9px] right-0 transform translate-x-1/4 translate-y-1/4"
                alt="Edit"
              />
                      </div>
          <div className="my-2">
              <p className="font-bold text-center"> {userName}</p>
              <p  className="text-center text-xs"> Human Rights Activist</p>

          </div>

          <div className=" " >
            
          <ul
  className="py-2 space-y-2 text-sm  mx-4 text-gray-800 "
  aria-labelledby="dropdownDefaultButton"
>
  <li className=" hover:bg-gray-100  rounded-lg">
    <a
      href="/UserProfile"
      className="block  px-16 py-2 "
    >
      <img src={profile}  className="align-middle  mr-2  inline w-4 h-4"/>
     <span className="inline align-middle">  My Profile </span>
    </a>
  </li>

  <li className=" hover:bg-gray-100  rounded-lg">
    <a
      href="#"
      className="block  px-16 py-2 "
    >
    
      <img src={money}  className="align-middle  mr-2  inline w-4 h-4"/>
     <span className="inline align-middle"> My Earnings </span>
    </a>
  </li>

  <li className=" hover:bg-gray-100  rounded-lg">
    <a
      href="#"
      className="block  px-16 py-2 "
    >
    
      <img src={wallet}  className="align-middle  mr-2  inline w-4 h-4"/>
     <span className="inline align-middle"> My Wallet </span>
    </a>
  </li>


  <li className=" hover:bg-gray-100  rounded-lg">
    <a
      href="#"
      className="block  px-16 py-2 "
    >
    
      <img src={battery}  className="align-middle  mr-2  inline w-4 h-4"/>
     <span className="inline align-middle"> Shared Campaigns </span>
    </a>
  </li>



  <li className=" hover:bg-gray-100  rounded-lg">
    <a
      href="#"
      className="block  px-16 py-2 "
    >
    
      <img src={support}  className="align-middle  mr-2  inline w-4 h-4"/>
     <span className="inline align-middle"> Support </span>
    </a>
  </li>

  <li className=" hover:bg-gray-100  rounded-lg">
    <a
      href="#" className="block  px-16 py-2 "
    >
      <img src={deleteAccount}  className="align-middle  mr-2  inline w-4 h-4"/>
     <span className="inline align-middle text-red-700"> Delete Account </span>
    </a>
  </li>



 
 
</ul>

          </div>

          
        </div>
      </div>
 

    </>
  );
}

export default Navbar;
