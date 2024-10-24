import React, { useEffect, useState } from "react";
import "./topnews.css";

const TopNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("https://671761aeb910c6a6e027d0ee.mockapi.io/news")
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error("Error fetching news:", error));
    }, []);

    return (
            <div className="row">
                <h2>TIN TỨC NỔI BẬT</h2>
                <div className="product-container">
                    {news.map(item => (
                        <div className="product-card" key={item.id}>
                            <a title={item.title}>
                                <img className="product-image" src={item.image} alt={item.title} style={{width: "350px", height: "250px"}}/>
                            </a>
                            <div className="product-info">
                                <a className="product-title" title={item.title}>{item.title}</a>
                                <p className="description">{item.description}</p>
                                <a className="product-button"> Đọc tiếp </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default TopNews;