import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./page/home/Home";
import Products from "./page/products/Products";
import AboutUs from "./page/about_us/AboutUs";
import ContactUs from "./page/contact_us/ContactUs";
import {Product} from "./page/product_detail/Product";
import Checkout from "./page/checkout/Checkout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='*' element={<Home/>}></Route>
                <Route path='/product' element={<Products/>}></Route>
                <Route path="/product/:id" element={<Product />} />
                <Route path='/about-us' element={<AboutUs/>}></Route>
                <Route path='/contact-us' element={<ContactUs/>}></Route>
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </div>
    );
}

export default App;