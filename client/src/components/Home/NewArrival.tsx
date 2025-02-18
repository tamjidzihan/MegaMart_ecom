const NewArrival = () => {
    return (
        <div className="mt-16">
            <div className="flex items-center space-x-2 mb-8">
                <div className="w-5 h-10 bg-red-500 rounded-sm" />
                <h3 className="text-red-500 font-medium">Featured</h3>
            </div>
            <h2 className="text-3xl font-semibold mb-8">New Arrival</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6">
                    <div className="relative h-[600px] bg-black rounded-lg overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800"
                            alt="PlayStation 5"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-3xl font-bold mb-2">PlayStation 5</h3>
                            <p className="mb-4 text-gray-200">
                                Black and White version of the PS5 coming out on sale.
                            </p>
                            <button className="text-white hover:underline">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-rows-2 gap-6">
                    <div className="relative h-[285px] bg-black rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                            alt="Women's Collection"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Women's Collections</h3>
                            <p className="mb-4 text-gray-200">
                                Featured woman collections that give you another vibe.
                            </p>
                            <button className="text-white hover:underline">Shop Now</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="relative h-[285px] bg-black rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800"
                                alt="Speakers"
                                className="w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Speakers</h3>
                                <p className="mb-4 text-sm text-gray-200">
                                    Amazon wireless speakers
                                </p>
                                <button className="text-white hover:underline">Shop Now</button>
                            </div>
                        </div>
                        <div className="relative h-[285px] bg-black rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800"
                                alt="Perfume"
                                className="w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Perfume</h3>
                                <p className="mb-4 text-sm text-gray-200">
                                    GUCCI INTENSE OUD EDP
                                </p>
                                <button className="text-white hover:underline">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewArrival;
