import React from 'react';
import Footer from 'components/Footer';

const Auth = ({ children }) => {
	return (
		<div className='flex flex-col justify-between h-screen'>
			<main className='h-full overflow-y-scroll'>{children}</main>
			<Footer />
		</div>
	);
};

export default Auth;



