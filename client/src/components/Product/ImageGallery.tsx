import { useState } from "react";
interface Image {
    thumbnail: string;
    full: string;
}
const images: Image[] = [
    {
        thumbnail:
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=100&h=100",
        full: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=800",
    },
    {
        thumbnail:
            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=100&h=100",
        full: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=800",
    },
    {
        thumbnail:
            "https://images.unsplash.com/photo-1605640756066-6352a55947b8?auto=format&fit=crop&q=80&w=100&h=100",
        full: "https://images.unsplash.com/photo-1605640756066-6352a55947b8?auto=format&fit=crop&q=80&w=800",
    },
    {
        thumbnail:
            "https://images.unsplash.com/photo-1605640842060-7e2fe81b2725?auto=format&fit=crop&q=80&w=100&h=100",
        full: "https://images.unsplash.com/photo-1605640842060-7e2fe81b2725?auto=format&fit=crop&q=80&w=800",
    },
];
const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`w-20 h-20 border rounded-lg overflow-hidden ${selectedImage === index ? "border-red-500" : "border-gray-200"}`}
                        onClick={() => setSelectedImage(index)}
                    >
                        <img
                            src={image.thumbnail}
                            alt={`Product thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
            <div className="flex-1">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                    <img
                        src={images[selectedImage].full}
                        alt="Product"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
export default ImageGallery;
