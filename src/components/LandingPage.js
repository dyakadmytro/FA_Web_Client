import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white font-mono">
            {/* header */}
            <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-xl z-50 py-3">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-neon-green text-3xl font-extrabold tracking-tighter transform hover:scale-105 transition-transform">
                        LOGO
                    </div>

                    {/* Sign In & Sign Up */}
                    <div className="flex items-center space-x-4">
                        <Link to="/signin" className="text-neon-pink hover:bg-neon-pink hover:text-black px-4 py-2 transition-colors">
                            Sign In
                        </Link>
                        <button className="text-neon-green hover:bg-black px-4 py-2 transition-colors rounded">
                            Sign Up
                        </button>
                    </div>
                </div>
            </header>
            {/* Welcome Section */}
            <section className="flex justify-center items-center h-[70vh]">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-neon-pink">Welcome to Our Game</h1>
                    <p className="mt-4 text-xl">Dive into an immersive experience like no other. Join the adventure today.</p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 px-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-5 text-neon-green">About Us</h2>
                    <p className="text-lg leading-relaxed">
                        Embark on a journey with our team of dedicated game developers, passionate about crafting unique worlds.
                        Our games offer a blend of thrill, adventure, and unparalleled excitement. Dive in, and let's redefine gaming together.
                    </p>
                </div>
            </section>

        </div>
    );
}

export default LandingPage;
