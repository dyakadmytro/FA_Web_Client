import React from 'react';

const Header = () => {
    return (
        <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
            <div className="text-neon-green text-3xl font-bold">
                GAME LOGO
            </div>
            <button className="text-neon-pink hover:bg-neon-pink hover:text-black px-4 py-2 transition-colors rounded">
                Logout
            </button>
        </div>
    );
}

export default Header;
