import React from 'react';


const SignInPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white font-mono flex justify-center items-center">

            {/* Card */}
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-96">

                {/* Logo */}
                <div className="text-center mb-6">
                    <div className="text-neon-green text-4xl font-extrabold tracking-tighter">
                        LOGO
                    </div>
                </div>

                {/* Form */}
                <form>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-neon-pink mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded text-black"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-neon-pink mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 rounded text-black"
                        />
                    </div>

                    {/* Sign In Button */}
                    <div className="mb-4">
                        <button className="w-full text-neon-green bg-neon-green hover:bg-black py-2 rounded transition-colors">
                            Sign In
                        </button>
                    </div>

                    {/* Google Login Button */}
                    <div>
                        <button className="w-full text-black bg-white hover:bg-gray-300 py-2 rounded transition-colors">
                            Login with Google
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default SignInPage;
