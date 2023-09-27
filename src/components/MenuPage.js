import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MenuPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

const MainContent = () => {
    return (
        <div className="flex-1 p-10">
            <h1>Welcome to the Game Dashboard</h1>
            {/* Rest of your content */}
        </div>
    );
}

export default MenuPage;
