import { useState } from "react";
import { Heart, Minus, Plus, Truck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ImageGallery from "../components/Product/ImageGallery";
import RelatedProducts from "../components/Product/RelatedProducts";

const ProductDetailsPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("white");
    return (
        <div className="w-full">
            <div className="container mx-auto max-w-[1440px] px-4 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center  space-x-2 text-sm mb-8">
                    <Link to="/" className="text-gray-500">
                        Account
                    </Link>
                    <span className="text-gray-500">/</span>
                    <Link to="/gaming" className="text-gray-500">
                        Gaming
                    </Link>
                    <span className="text-gray-500">/</span>
                    <span className="text-black">Havic HV G-92 Gamepad</span>
                </div>
                {/* Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[80%] place-self-center my-10">
                    <ImageGallery />
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Havic HV G-92 Gamepad</h1>
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex text-yellow-400">
                                {"★".repeat(4)}
                                {"☆".repeat(1)}
                            </div>
                            <span className="text-gray-500">(150 Reviews)</span>
                            <span className="text-green-500">In Stock</span>
                        </div>
                        <div className="text-2xl font-bold mb-6">$192.00</div>
                        <p className="text-gray-600 mb-8">
                            PlayStation 5 Controller Skin High quality vinyl with air channel
                            adhesive for easy bubble free install & mess free removal Pressure
                            sensitive.
                        </p>
                        <div className="mb-6">
                            <div className="font-semibold mb-2">Colours:</div>
                            <div className="flex space-x-4">
                                <button
                                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === "white" ? "border-red-500" : "border-gray-300"}`}
                                    style={{
                                        backgroundColor: "white",
                                    }}
                                    onClick={() => setSelectedColor("white")}
                                />
                                <button
                                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === "pink" ? "border-red-500" : "border-gray-300"}`}
                                    style={{
                                        backgroundColor: "pink",
                                    }}
                                    onClick={() => setSelectedColor("pink")}
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="font-semibold mb-2">Size:</div>
                            <div className="flex space-x-4">
                                {["XS", "S", "M", "L", "XL"].map((size) => (
                                    <button
                                        key={size}
                                        className={`w-12 h-12 border rounded-lg ${selectedSize === size ? "border-red-500 text-red-500" : "border-gray-300"}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="flex items-center border rounded-lg">
                                <button
                                    className="p-3 hover:bg-gray-100"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <Minus size={20} />
                                </button>
                                <span className="px-4">{quantity}</span>
                                <button
                                    className="p-3 hover:bg-gray-100"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                            <Link to={'/cart'}>
                                <button className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-600">
                                    Buy Now
                                </button>
                            </Link>
                            <button className="p-3 border rounded-lg hover:bg-gray-100">
                                <Heart size={24} />
                            </button>
                        </div>
                        {/* Delivery Info */}
                        <div className="border rounded-lg p-4 space-y-4">
                            <div className="flex items-center space-x-4">
                                <Truck size={24} />
                                <div>
                                    <div className="font-semibold">Free Delivery</div>
                                    <div className="text-sm text-gray-500">
                                        Enter your postal code for Delivery Availability
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <ArrowLeft size={24} />
                                <div>
                                    <div className="font-semibold">Return Delivery</div>
                                    <div className="text-sm text-gray-500">
                                        Free 30 Days Delivery Returns. Details
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};
export default ProductDetailsPage;
