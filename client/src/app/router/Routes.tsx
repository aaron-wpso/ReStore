import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Home/HomePage";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import AboutPage from "../about/AboutPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../contact/ContactPage";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            { path: '', element: <HomePage />},
            { path: 'catalog', element: <Catalog />},
            { path: 'catalog/:id', element: <ProductDetails />},
            { path: 'about', element: <AboutPage />},
            { path: 'contact', element: <ContactPage />}
        ]
    }
])