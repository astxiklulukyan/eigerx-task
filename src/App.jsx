import React from 'react';
import Header from "./components/header/Header";
import MessageBox from './components/messageBox/MessageBox';
import HelpData from './components/helpData/HelpData';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='main-wrapper relative w-full min-h-screen overflow-hidden rounded-[16px] p-4 shadow-[0px_5px_40px_0px_#00000029] flex flex-col'>      
        <Header />

        <main className='pt-[100px] flex-1'>
          <div className='container mx-auto'> 
            <h2 className='text-white/70 padding-x'>Hello there</h2>
            <h2 className='text-white padding-x'>How can we help?</h2>

            <MessageBox />

            <HelpData />    
            </div>       
        </main>

        <Footer />           
    </div>    
  );
};

export default App;