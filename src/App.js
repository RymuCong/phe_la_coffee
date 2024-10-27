import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./page/home/Home";
import Product from "./page/products/Product";
import AboutUs from "./page/about_us/AboutUs";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/about-us' element={<AboutUs/>}></Route>
            </Routes>
        </div>
    );
}

export default App;