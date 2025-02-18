import { Heart, Eye } from "lucide-react";
const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        image:
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=200",
        rating: 4.5,
        reviews: 88,
        discount: "-40%",
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        image:
            "https://images.unsplash.com/photo-1601445638532-3c6f6c3282ba?auto=format&fit=crop&q=80&w=200",
        rating: 4.7,
        reviews: 75,
        discount: "-25%",
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        image:
            "https://images.unsplash.com/photo-1616711906333-23cf8b122d38?auto=format&fit=crop&q=80&w=200",
        rating: 4.8,
        reviews: 99,
        discount: "-30%",
    },
    {
        id: 4,
        name: "RGB liquid CPU Cooler",
        price: 160,
        originalPrice: 170,
        image:
            "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=200",
        rating: 4.6,
        reviews: 65,
    },
];
const RelatedProducts = () => {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Item</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg p-4 group relative"
                    >
                        <div className="relative">
                            {product.discount && (
                                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                                    {product.discount}
                                </span>
                            )}
                            <div className="absolute right-2 top-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                    <Heart size={20} />
                                </button>
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                    <Eye size={20} />
                                </button>
                            </div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                        </div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-lg font-bold text-red-500">
                                ${product.price}
                            </span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                    ${product.originalPrice}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                            <div className="flex text-yellow-400">
                                {"★".repeat(Math.floor(product.rating))}
                            </div>
                            <span className="text-sm text-gray-500">({product.reviews})</span>
                        </div>
                        <button className="mt-4 w-full bg-black text-white py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default RelatedProducts;
