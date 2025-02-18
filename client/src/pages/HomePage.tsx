import BestSelling from "../components/Home/BestSelling";
import CategoryBrowser from "../components/Home/CategoryBrowser";
import CategorySideBar from "../components/Home/CategorySideBar";
import ExploreProducts from "../components/Home/ExploreProducts";
import FlashSales from "../components/Home/FlashSales";
import HeroSection from "../components/Home/HeroSection";
import NewArrival from "../components/Home/NewArrival";
import PromotionalBanner from "../components/Home/PromotionalBanner";
import ServiceFeatures from "../components/Home/ServiceFeatures";


const HomePage = () => {
    return (
        <div className="w-full">
            <div className="container max-w-[1440px] mx-auto px-4 py-6">
                <div className="flex gap-6">
                    <CategorySideBar />
                    <HeroSection />
                </div>
                <FlashSales />
                <CategoryBrowser />
                <BestSelling />
                <PromotionalBanner />
                <ExploreProducts />
                <NewArrival />
                <ServiceFeatures />
            </div>
        </div>
    );
};
export default HomePage;
