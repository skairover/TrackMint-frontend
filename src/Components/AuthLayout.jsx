import React from 'react';
import Chart2 from '../assets/Chart2.png'

const AuthLayout = ({children}) => {
  return (
    <div>
        {children}
        <img src={Chart2} className='w-100 float-right ' />
    </div>
  );
};

export default AuthLayout;