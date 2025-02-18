import { Search, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className=" bg-white border-b border-gray-300 sticky top-0 z-50">
            <div className="container max-w-[1440px] mx-auto px-4 pt-6 pb-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">Exclusive</div>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-blue-600">
                            Home
                        </a>
                        <a href="#" className="hover:text-blue-600">
                            Contact
                        </a>
                        <a href="#" className="hover:text-blue-600">
                            About
                        </a>
                        <Link to={'/signup'} className="hover:text-blue-600">
                            Sign Up
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-64 px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
                            />
                            <Search
                                className="absolute right-3 top-2.5 text-gray-400"
                                size={20}
                            />
                        </div>
                        <button className="hover:text-blue-600">
                            <Heart size={24} />
                        </button>
                        <button className="hover:text-blue-600">
                            <ShoppingCart size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
