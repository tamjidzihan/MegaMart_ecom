import React from "react";
interface Product {
    name: string;
    price: number;
    image: string;
}
export const OrderSummary: React.FC = () => {
    const products: Product[] = [
        {
            name: "LCD Monitor",
            price: 650,
            image:
                "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&q=80&w=100&h=100",
        },
        {
            name: "H1 Gamepad",
            price: 1100,
            image:
                "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&q=80&w=100&h=100",
        },
    ];
    const subtotal = products.reduce((sum, product) => sum + product.price, 0);
    const shipping = "Free";
    const total = subtotal;
    return (
        <div className="space-y-6">
            {products.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded"
                        />
                        <span>{product.name}</span>
                    </div>
                    <span>${product.price}</span>
                </div>
            ))}
            <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>{shipping}</span>
                </div>
                <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${total}</span>
                </div>
            </div>
        </div>
    );
};
