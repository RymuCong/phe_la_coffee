import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import HomeFeature from "./HomeFeature";
import BestsellerProducts from "./BestsellerProducts";
import TopNews from "./TopNews";
import Address from "../../components/Address/Address";
import {useEffect, useState} from "react";
import Preloader from "../../components/Preloader/Preloader";

const Home = () => {

const [loading, setLoading] = useState(true);

        useEffect(() => {
                setTimeout(() => {
                        setLoading(false);
                }, 300);
        }, []);

        if (loading) {
                return <Preloader />;
        }

return (
    <div className="home-page">
        <Header></Header>
        <Banner></Banner>
        <HomeFeature></HomeFeature>
        <BestsellerProducts></BestsellerProducts>
        <TopNews></TopNews>
        <Address></Address>
        <Footer></Footer>
    </div>
);
}

export default Home;