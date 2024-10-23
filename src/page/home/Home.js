import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import HomeFeature from "./HomeFeature";
import BestsellerProducts from "./BestsellerProducts";
import TopNews from "./TopNews";

const Home = () => {
return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <HomeFeature></HomeFeature>
        <BestsellerProducts></BestsellerProducts>
        <TopNews></TopNews>
        <Footer></Footer>
    </div>
);
}

export default Home;