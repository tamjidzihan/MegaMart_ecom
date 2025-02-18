import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import TopHeader from "../components/TopHeader"
import Footer from "../components/Footer"

const Layout = () => {
    return (
        <div className="min-h-screen  bg-gray-50">
            <TopHeader />
            <Navbar />
            <br className=" max-w-screen opacity-10 bg-black" />
            <main className="w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout