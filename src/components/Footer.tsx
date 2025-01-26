// import mail from '../utilsPhoto/mail.png';
import mail from "../assets/images/mail.png";

const Footer = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl mb-3 font-semibold text-white">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-2xl mb-10 text-[#F3F3F4]">
          Join the 25000+ clients in our community and stay updated with the
          latest offers, news, and releases.
        </p>
      </div>
      <div className="relative flex w-[343px] lg:w-[600px] h-[48px] lg:h-[88px] mx-auto justify-center items-center lg:mb-[72px]">
        <input
          className="bg-[#fff] rounded-[100px] w-full h-10 lg:h-14 px-5 mt-5"
          type="text"
          placeholder="Enter your email"
        />
        <button className="absolute right-0 lg:right-0 mt-5 text-sm lg:text-2xl text-white font-normal rounded-[100px] border-3 border-[#C16EFD] bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-2  px-6 lg:px-9 flex items-center ">
          Subscribe
        </button>
      </div>
      <div className="container text-white mt-10 w-[1200px] mx-auto px-0 lg:px-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 justify-between items-center lg:ml-14 ml-10">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
          <ul>
            {[
              "Home",
              "About us",
              "Team",
              "User Profile",
              "White Labelling",
              "Careers",
              "Start Earning",
            ].map((item) => (
              <li
                key={item}
                className="mb-2 hover:text-yellow-500 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
          <ul>
            {[
              "Digital Marketing",
              "Creative Writing Solution",
              "Web & Software",
              "E-Commerce Solution",
              "Graphic Design",
              "Multimedia & Video Editing",
              "Buy & Sell",
              "Merchandise",
              "Special Combo",
            ].map((item) => (
              <li
                key={item}
                className="mb-2 hover:text-yellow-500 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>

          <div>
            {" "}
            <div>
              <div className="mb-4">
                <p className="text-yellow-500 font-semibold mb-2">Mail:</p>
                <ul>
                  <li className="mb-1 flex gap-2">
                    <img src={mail} alt="" />
                    <a
                      href="mailto:official@metrosolver.com"
                      className="hover:text-yellow-500"
                    >
                      official@metrosolver.com
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <img src={mail} alt="" />
                    <a
                      href="mailto:hello@metrosolver.com"
                      className="hover:text-yellow-500"
                    >
                      hello@metrosolver.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-yellow-500 font-semibold mb-2">
                  Information:
                </p>
                <p className="flex gap-2">
                  <img src={mail} alt="" />
                  <a
                    href="mailto:info@metrosolver.com"
                    className="hover:text-yellow-500"
                  >
                    info@metrosolver.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {" "}
          <div className="mb-4">
            <p className="text-yellow-500 font-semibold mb-2">Job apply:</p>
            <p className="flex gap-2">
              <img src={mail} alt="" />
              <a
                href="mailto:career@metrosolver.com"
                className="hover:text-yellow-500"
              >
                career@metrosolver.com
              </a>
            </p>
          </div>{" "}
          <div>
            <div className="mb-4">
              <p className="text-yellow-500 font-semibold mb-2">Directions:</p>
              <ul>
                <li className="mb-1 flex gap-2">
                  <img src={mail} alt="" />
                  <a
                    href="mailto:akarim@metrosolver.com"
                    className="hover:text-yellow-500"
                  >
                    akarim@metrosolver.com
                  </a>
                </li>
                <li className="flex gap-2">
                  <img src={mail} alt="" />
                  <a
                    href="mailto:nkarim@metrosolver.com"
                    className="hover:text-yellow-500"
                  >
                    nkarim@metrosolver.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-yellow-500 font-semibold mb-2">
                White levelling related:
              </p>
              <p className="flex gap-2">
                <img src={mail} alt="" />
                <a
                  href="mailto:white@metrosolver.com"
                  className="hover:text-yellow-500"
                >
                  white@metrosolver.com
                </a>
              </p>
            </div>

            <div>
              <p className="text-yellow-500 font-semibold mb-2">
                Service related:
              </p>
              <p className="flex gap-2">
                <img src={mail} alt="" />
                <a
                  href="mailto:service@metrosolver.com"
                  className="hover:text-yellow-500"
                >
                  service@metrosolver.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
