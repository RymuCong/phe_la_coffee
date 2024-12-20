import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import HomeFeature from "./HomeFeature";
import BestsellerProducts from "./BestsellerProducts";
import TopNews from "./TopNews";
import Address from "../../components/Address/Address";

const Home = () => {
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