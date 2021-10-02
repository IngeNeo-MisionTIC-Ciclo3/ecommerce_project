import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AdminLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Header />
      <main className='h-full overflow-y-scroll bg-blue-400'>{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
