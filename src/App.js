import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
// ... Import other pages if you have them

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-900 text-white font-mono">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    {/*<Route path="/signup" element={<SignInPage />} />*/}
                    {/* ... Other routes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
