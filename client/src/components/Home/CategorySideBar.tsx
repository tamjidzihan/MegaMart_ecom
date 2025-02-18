import {
    Laptop,
    Smartphone,
    Headphones,
    Camera,
    Watch,
    Tv,
    Shirt,
    ShoppingBag,
} from "lucide-react";

const categories = [
    {
        name: "Electronics",
        icon: <Laptop size={20} />,
    },
    {
        name: "Smartphones",
        icon: <Smartphone size={20} />,
    },
    {
        name: "Audio",
        icon: <Headphones size={20} />,
    },
    {
        name: "Cameras",
        icon: <Camera size={20} />,
    },
    {
        name: "Watches",
        icon: <Watch size={20} />,
    },
    {
        name: "TV & Home",
        icon: <Tv size={20} />,
    },
    {
        name: "Fashion",
        icon: <Shirt size={20} />,
    },
    {
        name: "Others",
        icon: <ShoppingBag size={20} />,
    },
];
const CategorySideBar = () => {
    return (
        <div className="w-64 bg-white rounded-lg shadow-md">
            <div className="p-4 font-semibold border-b">Browse Categories</div>
            <div className="py-2">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className="w-full flex items-center px-4 py-2 hover:bg-gray-50"
                    >
                        <span className="mr-3">{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
export default CategorySideBar;
