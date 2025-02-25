import { ArrowLeft, ArrowRight, Heart, Eye } from "lucide-react";
import useProducts from "../../hooks/useProducts";
// const products = [
//     {
//         id: 1,
//         name: "Breed Dry Dog Food",
//         price: 100,
//         rating: 4.5,
//         reviews: 35,
//         image:
//             "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=200&h=200",
//     },
//     {
//         id: 2,
//         name: "CANON EOS DSLR Camera",
//         price: 360,
//         rating: 4.7,
//         reviews: 95,
//         image:
//             "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=200&h=200",
//     },
//     {
//         id: 3,
//         name: "ASUS FHD Gaming Laptop",
//         price: 700,
//         rating: 4.8,
//         reviews: 325,
//         image:
//             "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=200&h=200",
//     },
//     {
//         id: 4,
//         name: "Curology Product Set",
//         price: 500,
//         rating: 4.6,
//         reviews: 145,
//         image:
//             "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=200&h=200",
//     },
//     {
//         id: 5,
//         name: "Kids Electric Car",
//         price: 960,
//         rating: 4.7,
//         reviews: 65,
//         image:
//             "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=200&h=200",
//         isNew: true,
//         colors: ["red", "blue"],
//     },
//     {
//         id: 6,
//         name: "Jr. Zoom Soccer Cleats",
//         price: 1160,
//         rating: 4.8,
//         reviews: 35,
//         image:
//             "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200&h=200",
//         colors: ["yellow", "red"],
//     },
//     {
//         id: 7,
//         name: "GP11 Shooter USB Gamepad",
//         price: 660,
//         rating: 4.9,
//         reviews: 55,
//         image:
//             "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=200&h=200",
//         isNew: true,
//         colors: ["black", "red"],
//     },
//     {
//         id: 8,
//         name: "Quilted Satin Jacket",
//         price: 660,
//         rating: 4.7,
//         reviews: 35,
//         image:
//             "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=200&h=200",
//         colors: ["green", "red"],
//     },
// ];
const ExploreProducts = () => {
    const { products } = useProducts()
    return (
        <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <div className="flex items-center space-x-2">
                        <div className="w-5 h-10 bg-red-500 rounded-sm" />
                        <h3 className="text-red-500 font-medium">Our Products</h3>
                    </div>
                    <h2 className="text-3xl font-semibold mt-2">Explore Our Products</h2>
                </div>
                <div className="flex space-x-4">
                    <button className="p-2 border rounded-full hover:bg-gray-100">
                        <ArrowLeft size={20} />
                    </button>
                    <button className="p-2 border rounded-full hover:bg-gray-100">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products && products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white rounded-lg p-4 group relative"
                    >
                        <div className="relative">
                            {/* {product.isNew && (
                                <span className="absolute top-2 left-2 bg-[#00FF66] text-black px-2 py-1 text-sm rounded">
                                    NEW
                                </span>
                            )} */}
                            <div className="absolute right-2 top-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                    <Heart size={20} />
                                </button>
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                    <Eye size={20} />
                                </button>
                            </div>
                            <img
                                // src={product.productGallery[0]}
                                // alt={product.productGallery[0]}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                        </div>
                        <h3 className="font-semibold">{product.title}</h3>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-lg font-bold text-red-500">
                                ${product.salePrice}
                            </span>
                            <span className="text-md text-gray-400 line-through">
                                ${product.originalPrice}
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                            <div className="flex text-yellow-400">
                                {/* {"★".repeat(Math.floor(product.rating))} */}
                            </div>
                            {/* <span className="text-sm text-gray-500">({product.reviews})</span> */}
                        </div>
                        {/* {product.colors && (
                            <div className="flex space-x-2 mt-2">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`w-4 h-4 rounded-full border border-gray-300`}
                                        style={{
                                            backgroundColor: color,
                                        }}
                                    />
                                ))}
                            </div>
                        )} */}
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-600">
                    View All Products
                </button>
            </div>
        </div>
    );
};
export default ExploreProducts;
