const SignUp = () => {
    return (
        <div className="min-h-screen ">
            <div className="container max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 pt-20">
                    <div className="w-full h-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=2340"
                            alt="Shopping Cart"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 max-w-md mx-auto">
                        <h1 className="text-4xl font-bold mb-2">Create an account</h1>
                        <p className="text-gray-600 mb-8">Enter your details below</p>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Email or Phone Number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition-colors"
                            >
                                Create Account
                            </button>
                            <button
                                type="button"
                                className="w-full border border-gray-300 py-3 rounded-md font-semibold flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                            >
                                <img
                                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                                    alt="Google"
                                    className="h-5 object-contain"
                                />
                                <span>Sign up with Google</span>
                            </button>
                            <div className="text-center text-gray-600">
                                Already have account?{" "}
                                <a href="/login" className="text-red-500 hover:underline">
                                    Log in
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
