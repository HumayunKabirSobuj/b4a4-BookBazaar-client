import { useState } from "react";
import person1 from "../../src/assets/images/person1.png";
import person2 from "../../src/assets/images/person2.png";
import person3 from "../../src/assets/images/person3.png";
import person4 from "../../src/assets/images/person4.png";
import person5 from "../../src/assets/images/person5.png";
import person6 from "../../src/assets/images/person6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import icon1 from '../../src/assets/images/icon1.png'
import icon2 from '../../src/assets/images/icon2.png'
import icon3 from '../../src/assets/images/icon3.png'
import icon4 from '../../src/assets/images/icon4.png'
import icon5 from '../../src/assets/images/icon5.png'
const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Founder",
    "Co-founder",
    "Authors",
    "Publisher",
    "Senior Author",
  ];

  const team = [
    {
      name: "Nayemul Karim",
      role: "Founder & Chief Editor",
      category: "Founder",
      img: person1,
    },
    {
      name: "Shezan Mahmud",
      role: "Co-founder & Operations Head",
      category: "Co-founder",
      img: person2,
    },
    {
      name: "Mahbubul Karim",
      role: "Lead Publisher",
      category: "Publisher",
      img: person3,
    },
    {
      name: "Ayesha Siddiqah",
      role: "Creative Director",
      category: "Authors",
      img: person4,
    },
    {
      name: "Latisha Miles",
      role: "Publisher",
      category: "Publisher",
      img: person5,
    },
    {
      name: "Ayesha Haque",
      role: "Senior Author",
      category: "Senior Author",
      img: person6,
    },
  ];

  const filteredTeam =
    activeTab === "All"
      ? team
      : team.filter((member) => member.category === activeTab);

  return (
    <div className="container mx-auto">
      <div>
        <div className="lg:mb-[140px] lg:px-10 md:px-8 px-5">
          <div>
            <h1 className="text-white lg:text-6xl text-[28px] font-semibold text-center lg:mb-12">
              Meet Our Team
            </h1>

            {/* Tabs */}
            <div className="lg:mb-12">
              <div className="flex items-center justify-center">
                <div className="grid lg:grid-cols-7 grid-cols-3 gap-4 px-6 py-3 rounded-full lg:shadow-lg">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`lg:px-2 lg:py-2 lg:text-sm text-[10px] px-[4px] py-[6px] rounded-full transition duration-300 ${
                        activeTab === tab
                          ? "text-white border border-purple-500 bg-gray-700"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="lg:mb-12">
              {/* Swiper for smaller devices */}
              <div className="lg:hidden">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1.5}
                  grabCursor={true}
                  loop={true}
                  centeredSlides={true}
                >
                  {filteredTeam.map((member, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative lg:w-[405px] lg:h-[450px] h-[300px] rounded-2xl bg-gray-100 overflow-hidden shadow-lg border-2 border-blue-500 p-4">
                        <div className="relative">
                          <img
                            src={member.img}
                            alt={member.name}
                            className=" lg:h-[450px] h-[260px] lg:w-[405px] w-[253px] rounded-2xl"
                          />
                        </div>
                        <div className="absolute bottom-4 left-0 bg-gray-900 text-white lg:p-3 p-2 rounded-lg flex items-center gap-2 shadow-md w-[200px] rounded-r-full">
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <h2 className="lg:text-2xl text-[10px] font-semibold text-white">
                                {member.name}
                              </h2>
                              <p className="text-[#F3F3F4] lg:text-lg text-[8px] opacity-70">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Static Grid for larger devices */}
              <div className="hidden lg:grid lg:grid-cols-3 lg:gap-10">
                {filteredTeam.map((member, index) => (
                  <div
                    key={index}
                    className="relative w-full rounded-2xl bg-gray-100 overflow-hidden shadow-lg border-2 border-blue-500 "
                  >
                    <div className="relative">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-[350px] rounded-2xl"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 text-green-400  rounded-lg flex items-center gap-2 shadow-md">
                      <div>
                        <h2 className="lg:text-2xl font-semibold text-green-400">
                          {member.name}
                        </h2>
                        <p className="text-green-400 text-lg opacity-70">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" px-8 md:px-12 lg:px-16 md:pb-12 lg:lg:pb-16 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-10 ">
          {/* Left Side Content */}
          <div className="rounded-[30px] h-[350px] bg-gradient-to-r from-[#5C258D] to-[#4389A2] shadow-lg text-white flex-1 lg:w-full lg:w-[343px w-full py-5">
            {/* Card Content */}
           
            <h3 className="lg:text-[50px] text-[25px] mb-7 font-semibold text-center">
              Still Have A <br /> Questions?
            </h3>

            {/* Buttons or Actions */}

            <div className="flex items-center justify-evenly pt-8">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
              <img src={icon5} alt="" />
            </div>
          </div>

          {/* Right Side Contact Form */}
          <form className=" space-y-4 flex-1 lg:w-full w-[311px] lg:px-0 px-4">
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-white mb-2 font-semibold text-xs"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-white mb-2 font-semibold text-xs"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            {/* WhatsApp/Phone and Services */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-white mb-2 font-semibold text-xs"
                >
                  WhatsApp/Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter your number..."
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="services"
                  className="block text-white mb-2 font-semibold text-xs"
                >
                  Which are You Looking for Support in?
                </label>
                <select
                  id="services"
                  className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Choose services</option>
                  <option value="support">Support</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message Box */}
            <div>
              <label
                htmlFor="message"
                className="block text-white mb-2 font-semibold text-xs"
              >
                How Can We Help?
              </label>
              <textarea
                id="message"
                
                placeholder="Message goes in here..."
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button className=" lg:w-full  lg:text-xl text-[14px] text-white font-semibold rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] lg:py-1 lg:px-32 px-24 flex items-center justify-center ">
                
                <div className="flex items-center gap-1 lg:h-auto h-[30px]">
                  <p>Send </p>
                  <p>Message</p>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
