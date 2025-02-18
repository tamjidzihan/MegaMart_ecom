
const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        image:
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=200&h=200",
        rating: 4.8,
        reviews: 88,
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        originalPrice: 299.99,
        image:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
        id: 3,
        name: "Smartphone",
        price: 499.99,
        originalPrice: 699.99,
        image:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=200&h=200",
    },
];
const FlashSales = () => {
    return (
        <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <div className="flex items-center space-x-2">
                        <div className="w-5 h-10 bg-red-500 rounded-sm" />
                        <h3 className="text-red-500 font-medium">Today's</h3>
                    </div>
                    <h2 className="text-3xl font-semibold mt-2">Flash Sales</h2>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                        <div className="text-center">
                            <div className="text-xl font-bold">03</div>
                            <div className="text-sm text-gray-500">Days</div>
                        </div>
                        <div className="text-xl font-bold">:</div>
                        <div className="text-center">
                            <div className="text-xl font-bold">23</div>
                            <div className="text-sm text-gray-500">Hours</div>
                        </div>
                        <div className="text-xl font-bold">:</div>
                        <div className="text-center">
                            <div className="text-xl font-bold">19</div>
                            <div className="text-sm text-gray-500">Minutes</div>
                        </div>
                        <div className="text-xl font-bold">:</div>
                        <div className="text-center">
                            <div className="text-xl font-bold">56</div>
                            <div className="text-sm text-gray-500">Seconds</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg p-4">
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                                -40%
                            </span>
                        </div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-lg font-bold text-red-500">
                                ${product.price}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                                ${product.originalPrice}
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                            <div className="flex text-yellow-400">
                                {"★".repeat(Math.floor(product.rating ?? 0))} {/* Default to 0 */}
                            </div>
                            <span className="text-sm text-gray-500">({product.reviews ?? 0})</span> {/* Default to 0 */}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};
export default FlashSales;
