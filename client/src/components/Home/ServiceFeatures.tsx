
import { Truck, Headphones, ShieldCheck } from "lucide-react";
const ServiceFeatures = () => {
    return (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Truck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">FREE AND FAST DELIVERY</h3>
                <p className="text-gray-600">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Headphones size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
                <p className="text-gray-600">Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">MONEY BACK GUARANTEE</h3>
                <p className="text-gray-600">We reurn money within 30 days</p>
            </div>
        </div>
    );
};
export default ServiceFeatures;
