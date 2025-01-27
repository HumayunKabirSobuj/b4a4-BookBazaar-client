import Footer from "../components/Footer";
import Banner from "../components/HomePageComponents/Banner";
import FAQSection from "../components/HomePageComponents/FAQSection";
import HowToWorks from "../components/HomePageComponents/HowToWorks";
import OurService from "../components/HomePageComponents/OurService";
import WhyChoseBookBazzar from "../components/HomePageComponents/WhyChoseBookBazzar";

const Home = () => {
  return (
    <div>
      <Banner/>
      <HowToWorks/>
      <WhyChoseBookBazzar />
      <OurService/>
      <FAQSection/>
      <Footer/>
    </div>
  );
};

export default Home;
