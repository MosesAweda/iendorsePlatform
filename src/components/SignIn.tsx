import { useState } from 'react';
import logo from './svg/logo.svg';
import facebook from './svg/facebook.svg';
import instagram from './svg/instagram.svg';

const SignIn = () => {
  return (
    <>

      <div className="min-h-screen flex items-center justify-start bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(images/formbanner.png)' }}>
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border p-6 space-y-4 md:space-y-6 mx-5 md:mx-10 md:my-10">
            <div className="flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div className="my-1 flex justify-center text-lg font-medium leading-tight tracking-tight text-gray-900 md:text-xl">
         Sign In
            </div>
            <div className="flex justify-center text-sm leading-tight tracking-tight text-gray-900 my-1">
            Your impact matters, we’re excited to have you back.
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
 
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              
              <div className="flex items-center justify-center">
              <p className="px-4">Forgot your password?  <a href="/ForgotPassword" >  Reset </a> </p>
            </div>

            
              <div>
                <button className="bg-customBlue text-white p-2.5 rounded-md w-full">
              Sign In
                </button>
              </div>
            </form>


            <div className="flex items-center justify-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <p className="px-4">Or Sign in with</p>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
            </div>
            <div className="flex items-center justify-center">
              <p className="px-4"> Are you new here?  <a href="/SignUp" > Create An Account </a> </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default SignIn;
