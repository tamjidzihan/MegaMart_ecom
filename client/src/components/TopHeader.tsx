const TopHeader = () => {
    return (
        <div className="bg-black text-white py-2">
            <div className="container max-w-[1440px] mx-auto px-4 flex justify-between items-center">
                <div className="text-sm text-center w-full">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                    <span className="font-semibold ml-2 underline  cursor-pointer">ShopNow</span>
                </div>
                <div className="relative">
                    <select className="bg-black text-sm focus:outline-none  cursor-pointer">
                        <option>English</option>
                        <option>Español</option>
                        <option>Français</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
export default TopHeader;