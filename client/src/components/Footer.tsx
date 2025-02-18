import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-black text-white mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Exclusive</h3>
                        <h4 className="font-semibold mb-4">Subscribe</h4>
                        <p className="text-gray-400 mb-4">Get 10% off your first order</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-black border border-gray-600 rounded-lg py-2 px-4 pr-12"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <Send size={20} className="text-gray-400" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>111 Bijoy sarani, Dhaka,</li>
                            <li>DH 1515, Bangladesh.</li>
                            <li>exclusive@gmail.com</li>
                            <li>+88015-88888-9999</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Account</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Link</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Download App</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Save $3 with App New User Only
                        </p>
                        <div className="flex space-x-4 mb-4">
                            <div className="w-24 h-24 bg-gray-800 rounded-lg"></div>
                            <div className="space-y-2">
                                <img
                                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    className="h-8"
                                />
                                <img
                                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    className="h-8"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Facebook className="text-gray-400 hover:text-white" />
                            <Twitter className="text-gray-400 hover:text-white" />
                            <Instagram className="text-gray-400 hover:text-white" />
                            <Linkedin className="text-gray-400 hover:text-white" />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
