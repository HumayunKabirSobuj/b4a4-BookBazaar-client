import FAQSection from "../components/HomePageComponents/FAQSection";
import HowToWorks from "../components/HomePageComponents/HowToWorks";
import OurService from "../components/HomePageComponents/OurService";
import WhyChoseBookBazzar from "../components/HomePageComponents/WhyChoseBookBazzar";

const Home = () => {
  return (
    <div>
      <HowToWorks></HowToWorks>
      <WhyChoseBookBazzar />
      <OurService/>
      <FAQSection/>
    </div>
  );
};

export default Home;
