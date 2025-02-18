const products = [
    {
        id: 1,
        name: "Premium Headphones",
        price: 299.99,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
        id: 2,
        name: "Fitness Tracker",
        price: 99.99,
        image:
            "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
        id: 3,
        name: "Wireless Speaker",
        price: 159.99,
        image:
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
        id: 4,
        name: "Smart Camera",
        price: 399.99,
        image:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=200&h=200",
    },
];
const BestSelling = () => {
    return (
        <div className="mt-12">
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-2 ">
                    <div className="w-5 h-10 bg-red-500 rounded-sm" />
                    <h3 className="text-red-500 font-medium">This Month</h3>
                </div>
                <h2 className="text-3xl font-semibold">Best Selling Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold">{product.name}</h3>
                        <div className="mt-2">
                            <span className="text-lg font-bold text-blue-600">
                                ${product.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default BestSelling;
