import Navbar from '@/Components/Navbar';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <footer className='text-2xl bg-gray-300 py-5 mt-10'>Footer</footer>
        </div>
    );
};

export default WithLayout;