import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SignUp from "./components/Auth/SignUp";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import { CheckOutPage } from "./pages/CheckOutPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/signup', element: <SignUp /> },
            { path: '/productdetail', element: <ProductDetailsPage /> },
            { path: '/cart', element: <CartPage /> },
            { path: '/checkout', element: <CheckOutPage /> },
        ]
    }
])