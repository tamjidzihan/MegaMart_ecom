
import {
    Phone,
    Monitor,
    Watch,
    Camera,
    Headphones,
    Gamepad,
} from "lucide-react";
const categories = [
    {
        name: "Phones",
        icon: <Phone size={32} />,
    },
    {
        name: "Computers",
        icon: <Monitor size={32} />,
    },
    {
        name: "SmartWatch",
        icon: <Watch size={32} />,
    },
    {
        name: "Camera",
        icon: <Camera size={32} />,
    },
    {
        name: "HeadPhones",
        icon: <Headphones size={32} />,
    },
    {
        name: "Gaming",
        icon: <Gamepad size={32} />,
    },
];
const CategoryBrowser = () => {
    return (
        <div className="mt-16">
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-2 ">
                    <div className="w-5 h-10 bg-red-500 rounded-sm" />
                    <h3 className="text-red-500 font-medium">Categories</h3>
                </div>
                <h2 className="text-3xl font-semibold">Browse By Category</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                    >
                        <div className="mb-4">{category.icon}</div>
                        <span className="text-sm font-medium">{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
export default CategoryBrowser;
