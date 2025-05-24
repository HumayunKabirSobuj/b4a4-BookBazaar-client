import Footer from "../components/Footer";
import Banner from "../components/HomePageComponents/Banner";
import FAQSection from "../components/HomePageComponents/FAQSection";
import FeaturedBooks from "../components/HomePageComponents/FeaturedBooks";
import HowToWorks from "../components/HomePageComponents/HowToWorks";
import OurService from "../components/HomePageComponents/OurService";
import WhyChoseBookBazzar from "../components/HomePageComponents/WhyChoseBookBazzar";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner/>
      <HowToWorks/>
      <FeaturedBooks/>
      <WhyChoseBookBazzar />
      <OurService/>
      <FAQSection/>
      <Footer/>
    </div>
  );
};

export default Home;
