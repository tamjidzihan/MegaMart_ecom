const PromotionalBanner = () => {
    return (
        <div className="mt-16 bg-black rounded-lg overflow-hidden">
            <div className="container mx-auto">
                <div className="flex items-center justify-between p-8">
                    <div className="text-white">
                        <span className="text-[#00FF66] text-sm mb-4 block">
                            Categories
                        </span>
                        <h2 className="text-4xl font-semibold mb-6">
                            Enhance Your
                            <br />
                            Music Experience
                        </h2>
                        <div className="flex space-x-4 mb-6">
                            <div className="bg-white/10 rounded-full h-20 w-20 flex flex-col items-center justify-center text-white">
                                <span className="text-xl font-bold">23</span>
                                <span className="text-xs">Hours</span>
                            </div>
                            <div className="bg-white/10 rounded-full h-20 w-20 flex flex-col items-center justify-center text-white">
                                <span className="text-xl font-bold">05</span>
                                <span className="text-xs">Days</span>
                            </div>
                            <div className="bg-white/10 rounded-full h-20 w-20 flex flex-col items-center justify-center text-white">
                                <span className="text-xl font-bold">59</span>
                                <span className="text-xs">Minutes</span>
                            </div>
                            <div className="bg-white/10 rounded-full h-20 w-20 flex flex-col items-center justify-center text-white">
                                <span className="text-xl font-bold">35</span>
                                <span className="text-xs">Seconds</span>
                            </div>
                        </div>
                        <button className="bg-[#00FF66] text-black px-8 py-3 rounded-md font-semibold">
                            Buy Now!
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600"
                            alt="JBL Speaker"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PromotionalBanner;
