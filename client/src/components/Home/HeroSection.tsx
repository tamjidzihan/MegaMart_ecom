import { useState } from "react";
const slides = [
    {
        icon: "🍎",
        title: "iPhone 14 Series",
        description: "Up to 10% off Voucher",
        image:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800",
    },
];
const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className="flex-1 bg-black rounded-lg overflow-hidden">
            <div className="relative h-[400px]">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-1/2 p-12 text-white z-10">
                        <div className="text-5xl mb-4">{slides[currentSlide].icon}</div>
                        <h1 className="text-5xl font-bold mb-4">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-2xl mb-8">{slides[currentSlide].description}</p>
                        <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
                            Shop Now →
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img
                            src={slides[currentSlide].image}
                            alt="Product"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-500"}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default HeroSection;
