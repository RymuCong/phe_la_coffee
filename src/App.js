import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./page/home/Home";
import Product from "./page/products/Product";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
            </Routes>
        </div>
    );
}

export default App;