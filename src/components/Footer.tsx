import mail from "../assets/images/mail.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] py-10 rounded-3xl">
      <div className="text-center px-4 ">
        <h1 className="lg:text-5xl text-2xl mb-8 font-semibold text-white">
          Subscribe to Our Newsletter
        </h1>
        <p className="lg:text-2xl text-xl mb-8 text-[#F3F3F4] ">
          Join the 25000+ clients in our community and stay updated with the latest offers, news, and releases.
        </p>
      </div>

      <div className="relative flex w-[343px] lg:w-[600px] h-12  mx-auto justify-center items-center mb-16">
        <input
          className="rounded-full text-white w-full h-full px-5 border border-gray-500 bg-transparent"
          type="text"
          placeholder="Enter your email"
        />
        <button className="absolute right-0  text-sm lg:text-xl text-white font-semibold rounded-full border-2 border-[#C16EFD] bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] py-2 px-6 lg:px-9 flex items-center">
          Subscribe
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            {[
              "Home",
              "About us",
              "Team",
              "User Profile",
              "White Labelling",
              "Careers",
              "Start Earning",
            ].map((item) => (
              <li key={item} className="hover:text-yellow-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
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
              <li key={item} className="hover:text-yellow-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="space-y-6">
            <div>
              <p className="text-yellow-500 font-semibold mb-2">Mail:</p>
              <ul className="space-y-2">
                {["official@bookbazzar.com", "hello@bookbazzar.com"].map((email) => (
                  <li key={email} className="flex items-center gap-2">
                    <img src={mail} alt="mail icon" className="w-5 h-5" />
                    <a href={`mailto:${email}`} className="hover:text-yellow-500">{email}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-yellow-500 font-semibold mb-2">Information:</p>
              <div className="flex items-center gap-2">
                <img src={mail} alt="mail icon" className="w-5 h-5" />
                <a href="mailto:info@bookbazzar.com" className="hover:text-yellow-500">
                  info@bookbazzar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Contacts Section */}
        <div className="space-y-6">
          <div>
            <p className="text-yellow-500 font-semibold mb-2">Job Apply:</p>
            <div className="flex items-center gap-2">
              <img src={mail} alt="mail icon" className="w-5 h-5" />
              <a href="mailto:carrear@bookbazzar.com" className="hover:text-yellow-500">
                carrear@bookbazzar.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-yellow-500 font-semibold mb-2">Directions:</p>
            <div className="flex items-center gap-2">
              <img src={mail} alt="mail icon" className="w-5 h-5" />
              <a href="mailto:director@bookbazzar.com" className="hover:text-yellow-500">
                director@bookbazzar.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-yellow-500 font-semibold mb-2">White Labelling Related:</p>
            <div className="flex items-center gap-2">
              <img src={mail} alt="mail icon" className="w-5 h-5" />
              <a href="mailto:service@bookbazzar.com" className="hover:text-yellow-500">
                service@bookbazzar.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-yellow-500 font-semibold mb-2">Service Related:</p>
            <div className="flex items-center gap-2">
              <img src={mail} alt="mail icon" className="w-5 h-5" />
              <a href="mailto:service@bookbazzar.com" className="hover:text-yellow-500">
                service@bookbazzar.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
