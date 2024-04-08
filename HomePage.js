import React from 'react';
// import Header from './Header';
import Sidebar from '../components/Sidebar';
import Canvas from '../components/Canvas';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SideToolbar from '../components/SideToolBar';
import './styles.css';

const HomePage = () => {
        return (
          <>
            <Navbar />
            <div className="Homecontainer">
              <Header/>
              <main className="Homecontent">
                <Canvas />
                <SideToolbar className='SideToolbar ' />
              </main>
            </div>
          </>
        );
}

export default HomePage;
