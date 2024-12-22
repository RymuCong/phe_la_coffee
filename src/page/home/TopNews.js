import React, { useEffect, useState } from "react";
import "./topnews.css";
import {handleGetDataHomePage} from "../../service/drinks";

const TopNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await handleGetDataHomePage();
                const newsData = data.find(name => name.name === "news").data;
                setNews(newsData);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
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