import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 w-64 p-6">
            <ul>
                <li className="mb-3">
                    <Link to="/profile" className="hover:text-neon-green">Profile</Link>
                </li>
                <li className="mb-3">
                    <Link to="/heroes" className="hover:text-neon-green">Heroes</Link>
                </li>
                <li className="mb-3">
                    <Link to="/games" className="hover:text-neon-green">Games</Link>
                </li>
                <li className="mb-3">
                    <Link to="/history" className="hover:text-neon-green">History</Link>
                </li>
                <li className="mb-3">
                    <Link to="/bar" className="hover:text-neon-green">Bar</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
