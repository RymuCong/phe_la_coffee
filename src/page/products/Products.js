import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import "./Products.css";
import { handleGetData } from "../../service/drinks";
import ProductModal from "./modal/ProductModal";

const Products = () => {
    const [modalShow, setModalShow] = useState(false);
    const [prdDetail, setPrdDetail] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await handleGetData();
            setData(result);
        };
        fetchData();
        window.scrollTo({ top: 850 });
    }, []);

    let cafe = data?.filter((e) => e.category === "CÀ PHÊ").flatMap(e => e.products);
    let olong = data?.filter((e) => e.category === "Ô LONG MATCHA").flatMap(e => e.products);
    let syphon = data?.filter((e) => e.category === "SYPHON").flatMap(e => e.products);
    let french = data?.filter((e) => e.category === "FRENCH PRESS").flatMap(e => e.products);
    let moka = data?.filter((e) => e.category === "MOKA POT").flatMap(e => e.products);
    let nitro = data?.filter((e) => e.category === "COLD BREW").flatMap(e => e.products);
    let plus = data?.filter((e) => e.category === "PLUS - LON/CHAI TIỆN LỢI").flatMap(e => e.products);
    let topping = data?.filter((e) => e.category === "TOPPING").flatMap(e => e.products);
    let gohome = data?.filter((e) => e.category === "MANG PHÊ LA VỀ NHÀ").flatMap(e => e.products);

    const viewProduct = (id) => {
        setModalShow(true);
        let allProducts = data.flatMap(category => category.products);
        let obj = allProducts.find(product => product.id === id);
        setPrdDetail({ ...obj });
    };

    return (
        <div>
            <Header/>
            <Banner/>
            <div className="product">
                <div className="product__Nav">
                    <p>
                        <a href="#cafe">CÀ PHÊ</a>
                    </p>
                    <p>
                        <a href="#olong">Ô LONG MATCHA</a>
                    </p>
                    <p>
                        <a href="#syphon">SYPHON</a>
                    </p>
                    <p>
                        <a href="#french">FRENCH PRESS</a>
                    </p>
                    <p>
                        <a href="#moka">MOKA POT</a>
                    </p>
                    <p>
                        <a href="#nitro">NITRO COLD BREW</a>
                    </p>
                    <p>
                        <a href="#plus">PLUS - LON/CHAI TIỆN LỢI</a>
                    </p>
                    <p>
                        <a href="#topping">TOPPING</a>
                    </p>
                    <p>
                        <a href="#gohome">MANG PHÊ LA VỀ NHÀ</a>
                    </p>
                </div>
                <div className="product__item">
                    <p id="cafe">CÀ PHÊ</p>
                    <div className="cafe with">
                        {cafe?.map((e, i) => (
                            <div className="item" key={i}>
                                <img
                                    width={300}
                                    height={300}
                                    src={e.image}
                                    alt=""
                                />
                                <p style={{ fontSize: 20, marginLeft: 10, marginTop: 20 }}>
                                    {e.name}
                                </p>
                                <p
                                    style={{
                                        fontSize: 20,
                                        marginLeft: 10,
                                        fontWeight: 600,
                                        color: "brown",
                                    }}
                                >
                                    {e.price}
                                </p>
                                <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                            </div>
                        ))}
                    </div>
                    <p id="olong">Ô LONG MATCHA</p>
                    <div className="olong with">
                        {olong?.map((e, i) => (
                            <div className="item" key={i}>
                                <img
                                    width={300}
                                    height={300}
                                    src={e.image}
                                    alt=""
                                />
                                <p style={{ fontSize: 20, marginLeft: 10, marginTop: 20 }}>
                                    {e.name}
                                </p>
                                <p
                                    style={{
                                        fontSize: 20,
                                        marginLeft: 10,
                                        fontWeight: 600,
                                        color: "brown",
                                    }}
                                >
                                    {e.price}
                                </p>
                                <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                            </div>
                        ))}
                    </div>
                    <p id="syphon">SYPHON</p>
                    <div className="syphon with">
                        {syphon?.map((e, i) => (
                            <div className="item" key={i}>
                                <img
                                    width={300}
                                    height={300}
                                    src={e.image}
                                    alt=""
                                />
                                <p style={{ fontSize: 20, marginLeft: 10, marginTop: 20 }}>
                                    {e.name}
                                </p>
                                <p
                                    style={{
                                        fontSize: 20,
                                        marginLeft: 10,
                                        fontWeight: 600,
                                        color: "brown",
                                    }}
                                >
                                    {e.price}
                                </p>
                                <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                            </div>
                        ))}
                    </div>
                    <p id="french">FRENCH PRESS</p>
                    <div className="french with">
                        {french?.map((e, i) => (
                            <div className="item" key={i}>
                                <img
                                    width={300}
                                    height={300}
                                    src={e.image}
                                    alt=""
                                />
                                <p style={{ fontSize: 20, marginLeft: 10, marginTop: 20 }}>
                                    {e.name}
                                </p>
                                <p
                                    style={{
                                        fontSize: 20,
                                        marginLeft: 10,
                                        fontWeight: 600,
                                        color: "brown",
                                    }}
                                >
                                    {e.price}
                                </p>
                                <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                            </div>
                        ))}
                    </div>
                    <p id="moka">MOKA POT</p>
                    <div className="moka with">
                        {moka?.map((e, i) => (
                            <div className="item" key={i}>
                                <img
                                    width={300}
                                    height={300}
                                    src={e.image}
                                    alt=""
                                />
                                <p style={{fontSize: 20, marginLeft: 10, marginTop: 20}}>
                                    {e.name}
                                </p>
                                <p
                                    style={{
                                        fontSize: 20,
                                        marginLeft: 10,
                                        fontWeight: 600,
                                        color: "brown",
                                    }}
                                >
                                    {e.price}
                                </p>
                                <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                            </div>
                        ))}
                    </div>
                    <p id="nitro">NITRO COLD BREW</p>
                    <div className="nitro with">
                        {nitro?.map((e, i) => (
                            <div className="item" key={i}>
                                <img
                                    width={300}
                                    height={300}
                                    src={e.image}
                                    alt=""
                                />
                                <p style={{fontSize: 20, marginLeft: 10, marginTop: 20}}>
                                    {e.name}
                                </p>
                                <p
                                    style={{
                                        fontSize: 20,
                                        marginLeft: 10,
                                        fontWeight: 600,
                                        color: "brown",
                                    }}
                                >
                                    {e.price}
                                </p>
                                <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                            </div>
                        ))}
                    </div>
                    <p id="plus">PLUS - LON/CHAI TIỆN LỢI</p>
                    <div className="plus with">
                        {plus?.map((e, i) => (
                            <div className="item" key={i}>
                                <img
                                    width={300}
                                    height={300}
                                    src={e.image}
                                    alt=""
                                />
                                <p style={{ fontSize: 20, marginLeft: 10, marginTop: 20 }}>
                                    {e.name}
                                </p>
                                <p
                                    style={{
                                        fontSize: 20,
                                        marginLeft: 10,
                                        fontWeight: 600,
                                        color: "brown",
                                    }}
                                >
                                    {e.price}
                                </p>
                                <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                            </div>
                        ))}
                    </div>
                    <p id="topping">Topping</p>
                        <div className="topping with">
                            {topping?.map((e, i) => (
                                <div className="item" key={i}>
                                    <img
                                        width={300}
                                        height={300}
                                        src={e.image}
                                        alt=""
                                    />
                                    <p style={{ fontSize: 20, marginLeft: 10, marginTop: 20 }}>
                                        {e.name}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 20,
                                            marginLeft: 10,
                                            fontWeight: 600,
                                            color: "brown",
                                        }}
                                    >
                                        {e.price}
                                    </p>
                                    <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                                </div>
                            ))}
                        </div>
                        <p id="gohome">MANG PHÊ LA VỀ NHÀ</p>
                            <div className="gohome with">
                                {gohome?.map((e, i) => (
                                    <div className="item" key={i}>
                                        <img
                                            width={300}
                                            height={300}
                                            src={e.image}
                                            alt=""
                                        />
                                        <p style={{ fontSize: 20, marginLeft: 10, marginTop: 20 }}>
                                            {e.name}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: 20,
                                                marginLeft: 10,
                                                fontWeight: 600,
                                                color: "brown",
                                            }}
                                        >
                                            {e.price}
                                        </p>
                                        <button className="button" onClick={() => viewProduct(e.id)}>Mua Ngay</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            <ProductModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                prdDetail={prdDetail}
            />
            <Footer/>
        </div>
    );
}

export default Products;