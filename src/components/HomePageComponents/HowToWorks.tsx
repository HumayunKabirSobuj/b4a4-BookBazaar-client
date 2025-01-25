// import circle from '../../assets/images/HomePagePhoto/ycircle.png';
import women from "../../assets/images/HomePagePhoto/women.png";
import calculation from "../../assets/images/HomePagePhoto/calculation.png";
import business from "../../assets/images/HomePagePhoto/business.png";
import handshake from "../../assets/images/HomePagePhoto/handshake.png";
import hands from "../../assets/images/HomePagePhoto/hands.png";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HowToWorks = () => {
  const steps = [
    {
      title: "Book a Call",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
      img: women,
    },
    {
      title: "Requirement Analysis",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
      img: calculation,
    },
    {
      title: "Service Customisation",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
      img: business,
    },

    {
      title: "Quality Assurance",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
      img: hands,
    },
    {
      title: "Delivery and Support",
      description:
        "The final product is delivered to the customer. BookBazzar provides ongoing support and 24/7 customer service to ensure that the customers business continues to thrive and scale effectively",
      img: handshake,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    console.log(index);
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:mt-24 mt-10 text-white">
      <div className="text-center lg:mb-14 mb-8">
        <h2 className="lg:text-6xl text-3xl font-semibold text-white">
          How To Works?
        </h2>
        <p className="text-[#F3F3F4] text-base lg:text-lg font-normal mt-4 mx-auto lg:w-[40rem] w-[90%]">
          Based on the description of BookBazzar and the image provided, here is
          a 5-<br />
          step process that BookBazzar uses to scale a customers business
        </p>
      </div>

      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="relative mb-4 rounded-2xl">
            <div
              className="flex items-center lg:ml-[350px] justify-between p-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-xl lg:text-4xl font-medium">{step.title}</p>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && (
              <div className="p-4">
                <p className="text-base lg:text-xl lg:ml-[350px] font-normal">
                  {step.description}
                </p>
                <img
                  className="w-full lg:w-[300px] absolute bottom-5 h-auto mt-4 hidden lg:block"
                  src={step.img}
                  alt={step.title}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowToWorks;
