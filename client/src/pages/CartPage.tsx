import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
const CartPage = () => {
    return (
        <div className="w-full">
            <div className="container max-w-[1380px] mx-auto px-4 py-8">
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link to="/" className="text-gray-500 hover:text-gray-700">
                        Home
                    </Link>
                    <span className="text-gray-500">/</span>
                    <span>Cart</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        <table className="w-full">
                            <thead className="border-b">
                                <tr className="text-left">
                                    <th className="pb-4">Product</th>
                                    <th className="pb-4">Price</th>
                                    <th className="pb-4">Quantity</th>
                                    <th className="pb-4">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="py-4">
                                        <div className="flex items-center gap-4">
                                            <button className="text-red-500">
                                                <Trash2 size={20} />
                                            </button>
                                            <img
                                                src="https://images.unsplash.com/photo-1576707064479-3139e7e8aace?auto=format&fit=crop&q=80&w=120&h=120"
                                                alt="LCD Monitor"
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <span>LCD Monitor</span>
                                        </div>
                                    </td>
                                    <td className="py-4">$650</td>
                                    <td className="py-4">
                                        <div className="inline-flex items-center border rounded">
                                            <button className="px-3 py-1 border-r hover:bg-gray-50">
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                value="1"
                                                className="w-12 text-center py-1 focus:outline-none"
                                            />
                                            <button className="px-3 py-1 border-l hover:bg-gray-50">
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-4">$650</td>
                                </tr>
                                <tr>
                                    <td className="py-4">
                                        <div className="flex items-center gap-4">
                                            <button className="text-red-500">
                                                <Trash2 size={20} />
                                            </button>
                                            <img
                                                src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=120&h=120"
                                                alt="Gaming Pad"
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <span>H1 Gamepad</span>
                                        </div>
                                    </td>
                                    <td className="py-4">$550</td>
                                    <td className="py-4">
                                        <div className="inline-flex items-center border rounded">
                                            <button className="px-3 py-1 border-r hover:bg-gray-50">
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                value="2"
                                                className="w-12 text-center py-1 focus:outline-none"
                                            />
                                            <button className="px-3 py-1 border-l hover:bg-gray-50">
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-4">$1100</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-between mt-8">
                            <Link
                                to="/"
                                className="px-8 py-3 border border-black rounded hover:bg-gray-50"
                            >
                                Return To Shop
                            </Link>
                            <button className="px-8 py-3 border border-black rounded hover:bg-gray-50">
                                Update Cart
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-[360px]">
                        <div className="border rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b pb-4">
                                    <span>Subtotal:</span>
                                    <span>$1750</span>
                                </div>
                                <div className="flex justify-between border-b pb-4">
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Total:</span>
                                    <span>$1750</span>
                                </div>
                                <Link to="/checkout">
                                    <button className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600">
                                        Proceed to checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="flex-1 px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <button className="px-4 py-3 bg-red-500 text-white rounded hover:bg-red-600">
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartPage;
